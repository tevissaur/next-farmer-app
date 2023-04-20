import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const farmsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.farm.findMany();
  }),
});
