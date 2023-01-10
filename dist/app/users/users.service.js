"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserEntity_1 = require("../../entity/UserEntity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(data) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(user);
        return user;
    }
    async getAllUsers() {
        const findAllUsers = await this.usersRepository.find({
            select: ['id', 'firstName', 'lastName', 'email']
        });
        return findAllUsers;
    }
    async findOneOrFail(options) {
        try {
            return await this.usersRepository.findOneOrFail(options);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async updatedUser(id, data) {
        const user = await this.findOneOrFail({ where: { id: id } });
        this.usersRepository.merge(user, data);
        return this.usersRepository.save(user);
    }
    async deletedUser(id) {
        await this.usersRepository.findOneOrFail({ where: { id: id } });
        this.usersRepository.softDelete({ id: id });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserEntity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map