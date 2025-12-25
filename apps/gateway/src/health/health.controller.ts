import { Controller, Get } from '@nestjs/common';

import { HealthService } from './health.service';
import { HealthCheckDto } from '@common/health-check.dto';

@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}
    
    @Get()
    public checkAuthMicroservice(): Promise<HealthCheckDto>{
        return this.healthService.checkAuthMicroservice();
    }
}