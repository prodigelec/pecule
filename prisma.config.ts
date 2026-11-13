import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Le CLI Prisma (migrations) passe par la connexion directe, pas par le pooler.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: env("DIRECT_URL") },
});
