import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import * as schema from "../database/schema";

export type LogInsert = InferInsertModel<typeof schema.logs>;
export type LogSelect = InferSelectModel<typeof schema.logs>