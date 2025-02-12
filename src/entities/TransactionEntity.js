import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Transaction = new EntitySchema({
  name: "Transaction",
  tableName: "transaction",
  extends: BaseEntity,
  properties: {
    amount: { type: "number" },
    status: { type: "string" },
  },
});