import { createTRPCRouter } from "~/server/api/trpc";

//* Routes imports
import { userRouter } from "~/server/api/routers/user";
import { postRouter } from "~/server/api/routers/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
