import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const farmsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.farm.findMany()),
  getLocalFarms: publicProcedure
    .input(z.object({ latitude: z.number(), longitude: z.number() }))
    .query(({ ctx, input }) => {
      const { latitude, longitude } = input;
      return ctx.prisma.farm.findMany({
        select: {
          id: true,
          name: true,
          image: true,
        },
        where: {
          latitude: {
            gte: latitude - 10,
            lte: latitude + 10,
          },
          longitude: {
            gte: longitude - 10,
            lte: longitude + 10,
          },
        },
      });
    }),
    getPopularCategories: publicProcedure.query(({ ctx }) => ctx.prisma.category.findMany()),
});
