import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User } from './schemas/user.schema';
import { CreateUserDto } from '@common/create-user.dto';
import { GenericResponseDto } from '@common/generic-response.dto';
import { UserResponseDto } from '@common/user-response.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    public async getAllUsers(): Promise<UserResponseDto[]>{
        const users: User[] = await this.userModel.find().lean();

        return users.map(user => ({
            id: user._id.toString(),
            email: user.email,
            username: user.username
        }));
    }

    public async registerUser(createUserDto: CreateUserDto): Promise<GenericResponseDto> {
        createUserDto.password = await this.hashPassword(createUserDto.password);
        await this.userModel.create(createUserDto);
        return {
            success: true,
            message: "User registered successfully"
        }
    }

    private hashPassword(password: string): Promise<string>{
        const saltOrRounds: number = 10;
        return bcrypt.hash(password, saltOrRounds);
    }
}
