import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { GenericResponseDto } from '@common/generic-response.dto';
import { CreateUserDto } from '@common/create-user.dto';
import { UserResponseDto } from '@common/user-response.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @MessagePattern('get_users')
    public getUsers(): Promise<UserResponseDto[]> {
        return this.authService.getAllUsers();
    }

    @MessagePattern('register_user')
    public registerUser(createUserDto: CreateUserDto): Promise<GenericResponseDto> {
        return this.authService.registerUser(createUserDto);
    }
}
