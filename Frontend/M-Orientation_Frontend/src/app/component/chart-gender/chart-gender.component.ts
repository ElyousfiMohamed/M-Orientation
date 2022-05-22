import {Component, Input, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto'
import {ChartService} from "../../service/chart.service";
import {Output} from "../../model/output";


@Component({
  selector: 'app-chart-gender',
  templateUrl: './chart-gender.component.html',
  styleUrls: ['./chart-gender.component.css']
})
export class ChartGenderComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @Input() domaine: Output | undefined;

  constructor(private chartService:ChartService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chartService.getGenderStats(this.domaine!).subscribe({
      next : (data)=>{
        console.log(data)
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Current Vallue',
              data: [data[0], data[1]],
              backgroundColor: [
                '#40DFEF',
                '#FFC3C3'],
            },],
            labels: ['Homme','Femme']
          },options: {
            plugins: {
              title: {
                display: true,
                text: 'Sexe'
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
