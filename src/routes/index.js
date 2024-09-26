import { authRoutes } from "./auth.js";
import { orderRoutes } from "./order.js";
import { categoryRoutes, productRoutes } from "./product.js";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: "/api" });
  fastify.register(productRoutes, { prefix: "/api" });
  fastify.register(categoryRoutes, { prefix: "/api" });
  fastify.register(orderRoutes, { prefix: "/api" });
};
