/**
 * TODO Move to model folder
 */
export interface EmailAlertsConfig {
    alertsEnabled: boolean;
    username: string;
    password: string;
    confirmPassword: string;
    toAddress: string;
    fromAddress: string;
}