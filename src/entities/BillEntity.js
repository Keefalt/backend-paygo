import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Bill = new EntitySchema({
  name: "Bill",
  tableName: "bill",
  extends: BaseEntity,
  properties: {
    feePerMonth: { type: "number" },
  },
});