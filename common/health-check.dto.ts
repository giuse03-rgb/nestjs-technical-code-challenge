export interface HealthCheckDto {
    status: 'ok' | 'error';
    auth: 'up' | 'down';
}