import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
export const searchRouter = createTRPCRouter({
  getFilters: publicProcedure.query(({ ctx }) => ctx.prisma.filter.findMany()),
  getCategories: publicProcedure.query(({ ctx }) =>
    ctx.prisma.category.findMany()
  ),
});
