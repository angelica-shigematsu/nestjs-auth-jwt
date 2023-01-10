import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(): Promise<import("../../entity/UserEntity").UserEntity[]>;
    create(createdUserDto: CreateUserDto): Promise<import("../../entity/UserEntity").UserEntity>;
}
