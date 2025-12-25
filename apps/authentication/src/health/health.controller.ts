import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { HealthService } from './health.service';
import { HealthCheckDto } from '@common/health-check.dto';

@Controller()
export class HealthController {
    constructor(private readonly healthService: HealthService) {}

    @MessagePattern('health_check')
    public getHealthCheck(): Promise<HealthCheckDto> {
        return this.healthService.healthCheck();
    }
}
