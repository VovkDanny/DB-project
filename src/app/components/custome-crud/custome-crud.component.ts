import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../modes/customer';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-custome-crud',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './custome-crud.component.html',
  styleUrl: './custome-crud.component.css'
})
export class CustomeCrudComponent implements OnInit {
  model: Customer = {} as Customer;
  list: Customer[] = [];
  private baseUrl = "https://localhost:7186/api/Customer/";
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.getAll();
  }
  save(){
    this.httpClient.post<Customer>(this.baseUrl, this.model).subscribe({
      next: entity =>{
        this.list.push(entity);
        this.model = {} as Customer;
      } 
    })
  }
  getAll(){
    this.httpClient.get<Customer[]>(this.baseUrl).subscribe({
      next: lst=> this.list = lst
    });
  }

  delete(id:number){
      this.httpClient.delete(this.baseUrl+id).subscribe({
        next: _ => this.list = this.list.filter(x=>x.id!==id)
      });
  }


}
