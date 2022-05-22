import {Component, Input, OnInit, ViewChild} from '@angular/core';
import Chart from "chart.js/auto";
import {Output} from "../../model/output";
import {ChartService} from "../../service/chart.service";

@Component({
  selector: 'app-chart-etablissement',
  templateUrl: './chart-etablissement.component.html',
  styleUrls: ['./chart-etablissement.component.css']
})
export class ChartEtablissementComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @Input() domaine: Output | undefined;

  constructor(private chartService:ChartService) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.chartService.getEtablissementStats(this.domaine!).subscribe({
      next : (data)=>{
        console.log(data)
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Current Vallue',
              data: [data[0], data[1],data[2],data[3],data[4],data[5]],
              backgroundColor: [
                '#4FC3F7',
                '#AED581',
                '#FFD54F',
                '#BDBDBD',
                '#9575CD',
                '#E57373'],
            },],
            labels: ['Faculté','Grande école','École supérieure (EST, ENS, BTS, ...)','CPGE','OFPPT','Institue']
          },options: {
            plugins: {
              title: {
                display: true,
                text: 'Etablissement après bac'
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
