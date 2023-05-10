import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoriesRouter = createTRPCRouter({
  getAllCategories: publicProcedure.query(({ ctx }) =>
    ctx.prisma.category.findMany()
  ),
  getCategoryBySlug: publicProcedure.input(z.string()).query(({ ctx, input }) =>
    ctx.prisma.category.findFirst({
      where: {
        slug: input,
      },
      select: {
        id: true,
        name: true,
      },
    })
  ),
});
