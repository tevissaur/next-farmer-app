import { z } from "zod";
import { Prisma } from "@prisma/client";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const usersRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.user.findMany()),
  upsertUser: publicProcedure
    .input(
      z.object({
        id: z.string().nullish(),
        email: z.string().nullish(),
        firstName: z.string().nullish(),
        lastName: z.string().nullish(),
        fullName: z.string().nullish(),
        rating: z.number().nullish(),
        username: z.string().nullish(),
        image: z.string().nullish(),
      })
    )
    .mutation(({ ctx, input }) => {
      console.log("input", input);
      return ctx.prisma.user.upsert({
        where: {
          id: input.id || "",
        },
        create: {
          id: input.id || "",
          email: input.email || "",
          firstName: input.firstName || "",
          lastName: input.lastName || "",
          fullName: input.fullName || "",
          rating: input.rating || 0,
          username: input.username || "",
          image: input.image || "",
        },
        update: {
          email: input.email || "",
          firstName: input.firstName || "",
          lastName: input.lastName || "",
          fullName: input.fullName || "",
          rating: input.rating || 0,
          username: input.username || "",
          image: input.image || "",
        },
      });
    }),
});
