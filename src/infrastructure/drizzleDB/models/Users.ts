import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  user_id: uuid("user_id").defaultRandom().primaryKey(),
  user_email: varchar("user_email", { length: 255 }).notNull().unique(),
  user_sctpsd: varchar("user_sctpsd").notNull(),
});
