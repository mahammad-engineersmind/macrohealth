import { Integration } from './integration';

export interface CreateCustomerRequest {
    name: string;
}
export interface Customer {
    id: string;
    name: string;
}
export interface ExportedCustomer {
    customer?: Customer;
    integration?: Integration;
}
