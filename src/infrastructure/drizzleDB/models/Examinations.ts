import { sql } from "drizzle-orm";
import { varchar, uuid, pgTable } from "drizzle-orm/pg-core";

export const examinations = pgTable("examinations", {
  exmtn_id: uuid("exmtn_id").defaultRandom().primaryKey(),
  exmtn_name: varchar("exmtn_name", { length: 100 }).notNull(),
  exmtn_mdc_specialty: varchar("exmtn_mdc_specialty", { length: 50 }).notNull(),
});
