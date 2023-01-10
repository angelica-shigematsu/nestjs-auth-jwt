import { UserEntity } from 'src/entity/UserEntity';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateUserDto } from 'src/dtos/updateUser.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    createUser(data: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    findOneOrFail(options: FindOneOptions<UserEntity>): Promise<UserEntity>;
    updatedUser(id: string, data: UpdateUserDto): Promise<UserEntity>;
    deletedUser(id: string): Promise<void>;
}
