import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { api } from "~/utils/api";
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
          slug: true,
        },
        take: 6,
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
  getPopularCategories: publicProcedure.query(({ ctx }) =>
    ctx.prisma.category.findMany()
  ),
  getFarmById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input: { id } }) =>
      ctx.prisma.farm.findUnique({ where: { id } })
    ),
  getFarmBySlug: publicProcedure.input(z.string()).query(({ ctx, input }) =>
    ctx.prisma.farm.findFirst({
      where: { slug: input },
      include: {
        members: true,
        products: true,
      },
    })
  ),
  getFarmsByOwnerId: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.prisma.farm.findMany({
        where: { ownerId: input },
      });
    }),
  createFarms: publicProcedure
    .input(
      z
        .object({
          name: z.string(),
          slug: z.string(),
          image: z.string(),
          latitude: z.number(),
          longitude: z.number(),
          description: z.string(),
          address: z.string(),
          rating: z.number(),
          offersDelivery: z.boolean(),
          seasonId: z.string(),
          ownerId: z.string(),
        })
        .array()
    )
    .mutation(async ({ ctx, input }) => {
      const farms = await ctx.prisma.farm.findMany({
        select: {
          _count: true,
        },
        where: {
          ownerId: input[0]?.ownerId,
        },
      });
      if (farms.length > 3)
        return { error: "You already have the maximum amount of farms" };
      return ctx.prisma.farm.createMany({
        data: input,
      });
    }),
  addMemberToFarm: publicProcedure
    .input(
      z.object({
        farmId: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingMembership = await ctx.prisma.farmMember.findFirst({
        where: {
          farmId: input.farmId,
          userId: input.userId,
        },
      });
      if (existingMembership)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User is already a member of this farm",
        });
      return await ctx.prisma.farmMember.create({
        data: input,
      });
    }),
});
