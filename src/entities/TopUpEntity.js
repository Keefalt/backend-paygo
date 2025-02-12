import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const TopUp = new EntitySchema({
  name: "TopUp",
  tableName: "TopUp",
  extends: BaseEntity,
  properties: {
    amount: { type: "number" },
    tax: { type: "number" },
    currency: { type: "string" },
    date: { type: "timestamp" },
  },
});