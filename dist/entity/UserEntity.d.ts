import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
