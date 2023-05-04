import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.user.findMany()),
  upsertUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        fullName: z.string(),
        rating: z.number(),
        username: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      const create: Prisma.UserCreateInput = { ...input };
      ctx.prisma.user.upsert({
        where: { id: input.id },
        update: { ...input },
        create,
      });
    }),
});
