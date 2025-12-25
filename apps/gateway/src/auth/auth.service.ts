import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { CreateUserDto } from '../../../../common/create-user.dto';
import { GenericResponseDto } from '../../../../common/generic-response.dto';
import { UserResponseDto } from '../../../../common/user-response.dto';

@Injectable()
export class AuthService implements OnModuleInit{
    constructor(@Inject('AUTH_SERVICE') private readonly client: ClientProxy) { }

    public async onModuleInit() {
        await this.client.connect();
    }

    public findAllUsers(): Promise<UserResponseDto[]> {
        return firstValueFrom(this.client.send<UserResponseDto[]>('get_users', {}));
    }

    public registerUser(createUserDto: CreateUserDto): Promise<GenericResponseDto> {
        return firstValueFrom(this.client.send<GenericResponseDto>('register_user', createUserDto));
    }
}
