import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { BalanceCrudComponent } from "./components/balance-crud/balance-crud.component";
import { WorkHoursCrudComponent } from "./components/work-hours-crud/work-hours-crud.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomeCrudComponent } from "./components/custome-crud/custome-crud.component";
import { RegistrCrudComponent } from "./components/registr-crud/registr-crud.component";
import { CallCrudComponent } from "./components/call-crud/call-crud.component";
import { ReportsComponent } from "./components/reports/reports.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HttpClientModule, NgbNavModule, FormsModule, BalanceCrudComponent, WorkHoursCrudComponent, CustomeCrudComponent, RegistrCrudComponent, CallCrudComponent, ReportsComponent]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.active = parseInt(localStorage.getItem('active')?? '1');
  }
  title = 'test';
  active = 1;

  activeChange(){
    localStorage.setItem('active', this.active.toString())
  }
}