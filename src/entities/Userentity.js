import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const User = new EntitySchema({
  name: "User",
  tableName: "user",
  extends: BaseEntity,
  properties: {
    name: {type: "string"},
    email: { type: "string" },
    phoneNumber: {type: "string"},
    password: { type: "string" },
    photo: { type: "string" },
  },
  relations: {
    role: { reference: "m:1", entity: "Role" },
  },
});