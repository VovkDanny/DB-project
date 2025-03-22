import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registr } from '../../modes/registr';

@Component({
  selector: 'app-registr-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './Registr-crud.component.html',
  styleUrl: './Registr-crud.component.css'
})
export class RegistrCrudComponent implements OnInit {
  model: Registr = {} as Registr;
  list: Registr[] = [];
  baseUrl = "https://localhost:7186/Registr/";
  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.load();
    console.log(this.list);
    
  }

  save(){
    this.httpClient.post<Registr>(this.baseUrl, this.model)
    .subscribe(reg => this.list.push(reg));
    this.model = {} as Registr;
  }

  load(){
    this.httpClient.get<Registr[]>(this.baseUrl)
    .subscribe(lst => {
      console.log(lst);
      
      this.list = lst});
  }
  delete(id: number){
    this.httpClient.delete(this.baseUrl+id)
    .subscribe();
    this.list = this.list.filter(x => x.id != id);
  }
}
