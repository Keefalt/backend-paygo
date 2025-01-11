import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Course extends BaseEntity {

@Property({type: 'number'})
amount;

@Property({type: 'string'})
currency;

}