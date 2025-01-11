import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Bill extends BaseEntity {

@Property({type: 'string'})
name;

@Property({type: 'number'})
feepermonth;

}