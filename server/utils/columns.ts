import { timestamp, uuid } from "drizzle-orm/pg-core";

const DEFAULT_COLUMNS = {
  id: uuid("id").notNull().primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
};

export { DEFAULT_COLUMNS };
