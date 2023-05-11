import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { api } from "~/utils/api";
export const productsRouter = createTRPCRouter({
  getAllFromFarm: publicProcedure.input(z.string()).query(({ ctx, input }) =>
    ctx.prisma.product.findMany({
      where: {
        farmId: input,
      },
    })
  ),
  createProducts: publicProcedure
    .input(
      z
        .object({
          name: z.string(),
          description: z.string(),
          price: z.number(),
          farmId: z.string(),
          unitOfMeasure: z.string(),
          categoryId: z.string(),
          rating: z.number(),
        })
        .array()
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.createMany({
        data: input,
      });
    }),
});
