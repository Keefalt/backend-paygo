import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { User } from "./Userentity.js";

export const Balance = new EntitySchema({
  name: "Balance",
  tableName: "balance",
  extends: BaseEntity,
  properties: {
    amount: { type: "number" },
    currency: { type: "string" },
  },
});

//@OneToOne(() => User)
      //user;