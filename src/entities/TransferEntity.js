import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Transfer = new EntitySchema({
  name: "Transfer",
  tableName: "transfer",
  extends: BaseEntity,
  properties: {
    notes: { type: "string" },
  },
});