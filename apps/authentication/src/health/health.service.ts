import { HealthCheckDto } from "@common/health-check.dto";

export class HealthService {

    public async healthCheck(): Promise<HealthCheckDto> {
        return { status: 'ok', auth: 'up' }
    } 
}