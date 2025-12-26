import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { HealthService } from './health.service';
import { HealthCheckDto } from '@common/health-check.dto';

@ApiTags('health')
@Controller('health')
export class HealthController {
    constructor(private readonly healthService: HealthService) {}
    
    @Get()
    @ApiOperation({ summary: 'Check Authentication microservice health' })
    @ApiOkResponse({ description: 'Authentication microservice health executed' })
    public checkAuthMicroservice(): Promise<HealthCheckDto>{
        return this.healthService.checkAuthMicroservice();
    }
}