import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';

const client = createClient({ url: process.env.DATABASE_URL || "", authToken: process.env.DATABASE_AUTH_TOKEN || "" });

export const db = drizzle(client, {
  schema
});
// const result = await db.select().from(users).all()