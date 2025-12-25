import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

import { HealthCheckDto } from "@common/health-check.dto";

@Injectable()
export class HealthService{
    constructor(@Inject('AUTH_SERVICE') private readonly client: ClientProxy) { }

    public async checkAuthMicroservice(): Promise<HealthCheckDto> {
        return firstValueFrom(this.client.send<HealthCheckDto>('health_check', {})).catch((error: Error) =>{
            return { status: 'error', auth: 'down'}
        });
    }
}