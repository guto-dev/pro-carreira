//* Libraries imports
import z from "zod";

//* Local imports
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { infoSchema, updateUserProfile } from "~/schemas/user";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async (resolve) => {
    const user = await resolve.ctx.db.user.findUnique({
      where: { id: resolve.ctx.session.user.id },
    });

    if (!user) throw new Error("User not found");

    const skills = await resolve.ctx.db.userSkill.findMany({
      where: { userId: resolve.ctx.session.user.id },
      include: { Skill: true },
    });

    const newSkills = skills.map((skill) => {
      return {
        id: skill.skillId,
        name: skill.Skill.name,
        level: skill.level,
      };
    });

    return {
      user,
      skills: newSkills,
    };
  }),

  getUserById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query((resolve) => {
      const user = resolve.ctx.db.user.findUnique({
        where: { id: resolve.input.id },
      });
      return user;
    }),

  updateUserProfile: protectedProcedure
    .input(updateUserProfile)
    .mutation(async (resolve) => {
      const user = await resolve.ctx.db.user.findUnique({
        where: { id: resolve.ctx.session.user.id },
        include: { skills: true },
      });

      if (!user) throw new Error("User not found");

      //* Update user
      const updatedUser = await resolve.ctx.db.user.update({
        where: { id: resolve.ctx.session.user.id },
        data: {
          name: resolve.input.user.name,
          cpfcnpj: resolve.input.user.cpfcnpj,
          info: resolve.input.user.info,
        },
      });

      //* Update skills
      const skills = resolve.input.skills;
      if (!skills) return updatedUser;
      const userSkills = user.skills;

      //* Delete skills
      const skillsToDelete = userSkills.filter((userSkill) => {
        return !skills.some((skill) => skill.id === userSkill.skillId);
      });

      await resolve.ctx.db.userSkill.deleteMany({
        where: {
          userId: resolve.ctx.session.user.id,
          skillId: {
            in: skillsToDelete.map((skill) => skill.skillId),
          },
        },
      });

      //* Update skills
      const skillsToUpdate = userSkills.filter((userSkill) => {
        return skills.some((skill) => skill.id === userSkill.skillId);
      });

      await Promise.all(
        skillsToUpdate.map(async (skill) => {
          await resolve.ctx.db.userSkill.update({
            where: {
              userId_skillId: {
                userId: resolve.ctx.session.user.id,
                skillId: skill.skillId,
              },
            },
            data: {
              level: skills.find((s) => s.id === skill.skillId)?.level,
            },
          });
        }),
      );

      //* Create skills
      const skillsToCreate = skills.filter((skill) => {
        return !userSkills.some((userSkill) => skill.id === userSkill.skillId);
      });

      await Promise.all(
        skillsToCreate.map(async (skill) => {
          await resolve.ctx.db.userSkill.create({
            data: {
              level: skill.level,
              skillId: skill.id,
              userId: resolve.ctx.session.user.id,
            },
          });
        }),
      );

      return updatedUser;
    }),

  searchUserBySkillName: publicProcedure
    .input(z.object({ names: z.array(z.string()) }))
    .query(async (resolve) => {
      const users = await resolve.ctx.db.user.findMany({
        where: {
          skills: {
            some: {
              Skill: {
                name: {
                  in: resolve.input.names,
                  mode: "insensitive",
                },
              },
            },
          },
        },
      });

      return users;
    }),
});
