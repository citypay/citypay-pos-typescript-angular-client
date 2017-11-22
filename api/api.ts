export * from './deviceModule.service';
import { DeviceModuleService } from './deviceModule.service';
export * from './paymentModule.service';
import { PaymentModuleService } from './paymentModule.service';
export const APIS = [DeviceModuleService, PaymentModuleService];
