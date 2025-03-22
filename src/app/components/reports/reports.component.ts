import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { Balance } from '../../modes/balance';
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  baseUrl = 'https://localhost:7186/Reports/';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    // this.chart?.labels = ['asd']//.register(ChartDataLabels);
    this.httpClient.get<any[]>(this.baseUrl+'CallsByRegistr').subscribe({
      next: (lst) => {
        let list = lst;
        this.pieChartData = {
          labels: list.map((x) => [x.name]), //[['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
          datasets: [
            {
              data: list.map((x) => x.count), //[300, 500, 100],
            },
          ],
        };
      },
    });

    this.httpClient
      .get<Balance[]>('https://localhost:7186/balance/')
      .subscribe((lst) => {
        let list = lst.sort((x, y) => x.year - y.year);
        this.balanceData = {
          labels: list.map((x) => [x.year.toString()]), //[['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
          datasets: [
            {
              data: list.map((x) => x.profit), //[300, 500, 100],
            },
          ],
        };
      });

      this.httpClient.get<any[]>(this.baseUrl+'RegistrBySpeciality').subscribe({
        next: (lst) => {
          let list = lst;
          this.registrBySpecialityData = {
            labels: list.map((x) => [x.name]),
            datasets: [
              {
                data: list.map((x) => x.count), 
              },
            ],
          };
        },
      });
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> =
    {} as ChartData<'pie', number[], string | string[]>;
  public balanceData: ChartData<'pie', number[], string | string[]> =
    {} as ChartData<'pie', number[], string | string[]>;
  public registrBySpecialityData: ChartData<'pie', number[], string | string[]> =
    {} as ChartData<'pie', number[], string | string[]>;
  public pieChartType: ChartType = 'pie';

  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }

  get lineChart(){
    return this.lineChartOptions as unknown as ChartConfiguration['options'];
  }

  public lineChartOptions =  {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold',
              },
            },
          },
        ],
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
