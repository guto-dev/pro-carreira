//* Libraries imports
import z from "zod";

export const infoSchema = z.object({
  experiences: z.string().min(0).max(512).optional(),
  aboutMe: z.string().min(0).max(512).optional(),
});

export type Info = z.infer<typeof infoSchema>;

export const updateUserProfile = z.object({
  user: z.object({
    name: z.string().min(3).max(255),
    cpfcnpj: z.string().min(11).max(14).optional(),
    info: infoSchema.optional(),
  }),
  skills: z
    .array(
      z.object({
        id: z.number(),
        level: z.number().min(0).max(10),
      }),
    )
    .optional(),
});

export type UpdateUserProfile = z.infer<typeof updateUserProfile>;
