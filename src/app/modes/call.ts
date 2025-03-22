import { Customer } from "./customer";
import { Registr } from "./registr";

export interface Call{
    id: number;
    registrId: number;
    registr: Registr|undefined;
    customerId: number;
    customer: Customer|undefined;
    dateTime: Date;
    theme: string;
    feedback: string;
}