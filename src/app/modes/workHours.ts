import { Time } from "@angular/common";
import { Registr } from "./registr";

export interface WorkHours{
    id: number;
    registrId: number;
    date: Date;
    workStart: Time; 
    workEnd: Time;
    registr: Registr | null;
}