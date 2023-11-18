//* Libraries imports
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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

  // hello: publicProcedure
  //   .input(z.object({ mensagem: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Banana ${input.mensagem}`,
  //     };
  //   }),
  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),
  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),
  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
