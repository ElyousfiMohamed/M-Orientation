import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartService} from "../../service/chart.service";
import Chart from "chart.js/auto";
import {Output} from "../../model/output";

@Component({
  selector: 'app-chart-age',
  templateUrl: './chart-age.component.html',
  styleUrls: ['./chart-age.component.css']
})
export class ChartAgeComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @Input() domaine: Output | undefined;
  constructor(private chartService:ChartService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chartService.getAgeStats(this.domaine!).subscribe({
      next : (data)=>{
        console.log(data)
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Current Vallue',
              data: [data[0], data[1],data[2],data[3]],
              backgroundColor: [
                '#4FC3F7',
                '#AED581',
                '#FFD54F',
                '#BDBDBD'],
            },],
            labels: ['-25','25 à 35','35 à 45','+45']
          },options: {
            plugins: {
              title: {
                display: true,
                text: 'Age'
              }
            }
          }
        });
      },
      error : (err)=>{
        console.log(err);
      }
    })
  }

}
