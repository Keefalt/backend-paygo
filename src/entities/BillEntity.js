import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Bill = new EntitySchema({
  name: "Bill",
  tableName: "Bill",
  extends: BaseEntity,
  properties: {
    feePerMonth: { type: "number" },
  },
});