import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @ApiProperty({ example: 'test@email.com' })
    email!: string;

    @IsString()
    @ApiProperty({ example: 'john_doe' })
    username!: string;

    @IsString()
    @MinLength(8)
    @ApiProperty({ example: 'password123' })
    password!: string;
}