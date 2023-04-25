import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const articlesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.article.findMany()),
});
