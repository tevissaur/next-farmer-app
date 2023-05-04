import { createTRPCRouter } from "~/server/api/trpc";
import { farmsRouter } from "./routers/farms";
import { articlesRouter } from "./routers/articles";
import { usersRouter } from "./routers/users";
import { categoriesRouter } from "./routers/categories";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  farms: farmsRouter,
  articles: articlesRouter,
  user: usersRouter,
  categories: categoriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
