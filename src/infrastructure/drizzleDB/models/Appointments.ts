import { sql } from "drizzle-orm";
import {
  pgTable,
  timestamp,
  uuid,
  foreignKey,
} from "drizzle-orm/pg-core";
import { users } from "./Users";
import { examinations } from "./Examinations";

export const appointments = pgTable(
  "appointments",
  {
    aptmt_user_id: uuid("aptmt_user_id").notNull(),
    aptmt_exmtn_id: uuid("aptmt_exmtn_id").notNull(),
    aptmt_date: timestamp("aptmt_date").notNull(),
  },
  (t) => [
    foreignKey({
      name: "aptmt_user_id_fk",
      columns: [t.aptmt_user_id],
      foreignColumns: [users.user_id],
    })
      .onDelete("cascade")
      .onUpdate("cascade"),
    foreignKey({
      name: "aptmt_exmtn_id_fk",
      columns: [t.aptmt_exmtn_id],
      foreignColumns: [examinations.exmtn_id],
    })
      .onDelete("cascade")
      .onUpdate("cascade"),
  ]
);
