import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class User extends BaseEntity {
    @Property({type: 'string'})
    name;

    @Property({type: 'string'})
    email;

    @Property({type: 'string'})
    phoneNumber;

    @Property({type: 'string'})
    password;

    @Property({type: 'string'})
    photo;

    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password;
        this.photo = data.photo;
    }
}