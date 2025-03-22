import { Component, OnInit } from '@angular/core';
import { WorkHours } from '../../modes/workHours';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Registr } from '../../modes/registr';

@Component({
  selector: 'app-work-hours-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './work-hours-crud.component.html',
  styleUrl: './work-hours-crud.component.css'
})
export class WorkHoursCrudComponent implements OnInit {
  model: WorkHours = {} as WorkHours;
  list: WorkHours[] = [];
  baseUrl = "https://localhost:7186/WorkHours/";
  users: Registr[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.load();
      this.httpClient.get<Registr[]>( "https://localhost:7186/Registr/")
      .subscribe(lst => {        
        this.users = lst});
  }
  save(){
    // this.model.registr = null;
    this.httpClient.post<WorkHours>(this.baseUrl, this.model)
    .subscribe(reg => {
      this.list.push(reg)
      reg.registr = this.users.find(u=>u.id === reg.registrId)!
    });
    // this.model = {} as WorkHours;
  }

  load(){
    this.httpClient.get<WorkHours[]>(this.baseUrl)
    .subscribe(lst => this.list = lst);
  }
  delete(id: number){
    this.httpClient.delete<boolean>(this.baseUrl+id)
    .subscribe(result=>{
      if(result){
        this.list = this.list.filter(x => x.id != id);
      }
    });
  }
}
