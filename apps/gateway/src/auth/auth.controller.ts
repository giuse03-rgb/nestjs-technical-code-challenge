import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UserResponseDto } from '../../../../common/user-response.dto';
import { CreateUserDto } from '../../../../common/create-user.dto';
import { GenericResponseDto } from '../../../../common/generic-response.dto';

@ApiTags('authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiOperation({ summary: 'Register a user' })
    @ApiCreatedResponse({ description: 'User registered successfully' })
    @ApiBadRequestResponse({ description: 'Missing or invalid parameters' })
    @ApiConflictResponse({ description: 'Duplicated mail or username'})
    @ApiBody({ type: CreateUserDto })
    public registerUser(@Body() createUserDto: CreateUserDto): Promise<GenericResponseDto>{
        return this.authService.registerUser(createUserDto);
    }
    
    @Get('users')
    @ApiOperation({ summary: 'Retrieve all users' })
    @ApiOkResponse({ description: 'List of all users retrieved successfully' })
    public getAllUsers(): Promise<UserResponseDto[]>{
        return this.authService.findAllUsers();
    }
}
