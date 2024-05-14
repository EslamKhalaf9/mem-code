import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local"
});

console.log(process.env.DATABASE_URL);

export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./db/schema/schema.ts",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "DATABASE_URL",
    authToken: process.env.DATABASE_AUTH_TOKEN || "DATABASE_AUTH_TOKEN"
  },
  verbose: true,
  strict: true
});