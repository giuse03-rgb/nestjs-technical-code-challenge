import { Controller, Get, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserResponseDto } from '../../../../common/user-response.dto';
import { CreateUserDto } from '../../../../common/create-user.dto';
import { GenericResponseDto } from '../../../../common/generic-response.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    public registerUser(@Body() createUserDto: CreateUserDto): Promise<GenericResponseDto>{
        return this.authService.registerUser(createUserDto);
    }
    
    @Get('users')
    public getAllUsers(): Promise<UserResponseDto[]>{
        return this.authService.findAllUsers();
    }
}
