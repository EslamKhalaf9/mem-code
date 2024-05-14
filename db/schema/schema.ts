import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";


export const snippets = sqliteTable('snippets', {
  id: integer('id', { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  code: text('code').notNull(),
  language: text('language').notNull(),
});