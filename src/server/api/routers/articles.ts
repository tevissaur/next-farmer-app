import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const articlesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.article.findMany()),
  getTopBlogPosts: publicProcedure.query(({ ctx }) =>
    ctx.prisma.article.findMany({
      include: {
        author: true,
      },
      take: 3,
    })
  ),
  createBlogPost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        authorId: z.string(),
        articleType: z.string(),
        farmId: z.string().nullish(),
        productId: z.string().nullish(),
        likes: z.number(),
      })
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.article.create({
        data: input,
      })
    ),
});
