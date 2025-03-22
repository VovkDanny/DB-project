import { Component, OnInit } from '@angular/core';
import { Call } from '../../modes/call';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Registr } from '../../modes/registr';
import { Customer } from '../../modes/customer';

@Component({
  selector: 'app-call-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './call-crud.component.html',
  styleUrl: './call-crud.component.css'
})
export class CallCrudComponent implements OnInit {
  model: Call = {} as Call;
  list: Call[] = [];
  baseUrl = "https://localhost:7186/api/Call/";
  users: Registr[] = [];
  customer: Customer[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.getAll();
    this.httpClient.get<Registr[]>( "https://localhost:7186/Registr/")
    .subscribe(lst => {        
      this.users = lst});
      this.httpClient.get<Customer[]>("https://localhost:7186/api/Customer/").subscribe({
        next: lst=> this.customer = lst
      });
  }

  save(){
    this.model.customer = undefined;
    this.model.registr = undefined;

    this.httpClient.post<Call>(this.baseUrl, this.model).subscribe({
      next: call => this.list.push(call)
    })
  }
  delete(id: number){
    this.httpClient.delete(this.baseUrl+id).subscribe({
      next: _ => this.list = this.list.filter(x=>x.id!=id)
    })
  }
  getAll(){
    this.httpClient.get<Call[]>(this.baseUrl).subscribe({
      next: res => this.list = res
    })
  }
}
