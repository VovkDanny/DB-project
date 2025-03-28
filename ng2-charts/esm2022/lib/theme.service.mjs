import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor() {
        this.colorschemesOptions = new BehaviorSubject(undefined);
    }
    setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
        return this.pColorschemesOptions;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: ThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmcyLWNoYXJ0cy9zcmMvbGliL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU12QyxNQUFNLE9BQU8sWUFBWTtJQUh6QjtRQUtTLHdCQUFtQixHQUN4QixJQUFJLGVBQWUsQ0FBMkIsU0FBUyxDQUFDLENBQUM7S0FVNUQ7SUFSQyxzQkFBc0IsQ0FBQyxPQUFzQztRQUMzRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzhHQVpVLFlBQVk7a0hBQVosWUFBWSxjQUZYLE1BQU07OzJGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydENvbmZpZ3VyYXRpb24sIENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgcENvbG9yc2NoZW1lc09wdGlvbnM/OiBDaGFydE9wdGlvbnM7XG4gIHB1YmxpYyBjb2xvcnNjaGVtZXNPcHRpb25zOiBCZWhhdmlvclN1YmplY3Q8Q2hhcnRPcHRpb25zIHwgdW5kZWZpbmVkPiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFydE9wdGlvbnMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgc2V0Q29sb3JzY2hlbWVzT3B0aW9ucyhvcHRpb25zOiBDaGFydENvbmZpZ3VyYXRpb25bJ29wdGlvbnMnXSk6IHZvaWQge1xuICAgIHRoaXMucENvbG9yc2NoZW1lc09wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY29sb3JzY2hlbWVzT3B0aW9ucy5uZXh0KG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0Q29sb3JzY2hlbWVzT3B0aW9ucygpOiBDaGFydENvbmZpZ3VyYXRpb25bJ29wdGlvbnMnXSB7XG4gICAgcmV0dXJuIHRoaXMucENvbG9yc2NoZW1lc09wdGlvbnM7XG4gIH1cbn1cbiJdfQ==