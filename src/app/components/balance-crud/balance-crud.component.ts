import { Component, OnInit } from '@angular/core';
import { Balance } from '../../modes/balance';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-balance-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './balance-crud.component.html',
  styleUrl: './balance-crud.component.css'
})
export class BalanceCrudComponent implements OnInit {
  model: Balance = {} as Balance;
  list: Balance[] = [];
  baseUrl = "https://localhost:7186/balance/";
  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.load();
  }

  calcNetProfit(){
    this.model.netProfit = this.model.profit - this.model.spend - (this.model.tax/100 * this.model.profit);
  }
  save(){
    this.httpClient.post<Balance>(this.baseUrl, this.model)
    .subscribe(reg =>{
      this.list.push(reg);
      this.list = this.list.sort((x, y)=>y.year - x.year)
    } );
    this.model = {} as Balance;
  }

  load(){
    this.httpClient.get<Balance[]>(this.baseUrl)
    .subscribe(lst => this.list = lst.sort((x, y)=>y.year - x.year));
  }
  delete(id: number){
    this.httpClient.delete<boolean>(this.baseUrl+id)
    .subscribe(result=>{
      if(result){
        this.list = this.list.filter(x => x.year != id);
      }
    });
  }

}
