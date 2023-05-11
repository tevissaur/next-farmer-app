import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const searchRouter = createTRPCRouter({
  getFilters: publicProcedure.query(({ ctx }) => ctx.prisma.filter.findMany()),
  getCategories: publicProcedure.query(({ ctx }) =>
    ctx.prisma.category.findMany()
  ),
  fuzzySearch: publicProcedure
    .input(
      z.object({
        query: z.string(),
        latitude: z.number(),
        longitude: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const farms = await ctx.prisma.farm.findMany({
        where: {
          name: {
            startsWith: input.query,
            contains: input.query,
          },
          latitude: {
            gte: input.latitude - 10,
            lte: input.latitude + 10,
          },
          longitude: {
            gte: input.longitude - 10,
            lte: input.longitude + 10,
          },
        },
        select: {
          id: true,
          name: true,
          slug: true,
          image: true,
          description: true,
        },
      });
      const products = await ctx.prisma.product.findMany({
        where: {
          name: {
            contains: input.query,
          },
          farm: {
            latitude: {
              gte: input.latitude - 10,
              lte: input.latitude + 10,
            },
            longitude: {
              gte: input.longitude - 10,
              lte: input.longitude + 10,
            },
          },
        },
        select: {
          id: true,
          name: true,
          description: true,
          rating: true,
          farm: true,
        },
      });
      return { farms, products };
    }),
  searchWithFilters: publicProcedure
    .input(z.string().array())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.farm.findMany({});
    }),
});
