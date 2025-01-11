import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Transfer extends BaseEntity {

@Property({type: 'string'})
notes;

}