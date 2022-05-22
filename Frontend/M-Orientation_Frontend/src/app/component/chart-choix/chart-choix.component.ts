import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Output} from "../../model/output";
import {ChartService} from "../../service/chart.service";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-chart-choix',
  templateUrl: './chart-choix.component.html',
  styleUrls: ['./chart-choix.component.css']
})
export class ChartChoixComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @Input() domaine: Output | undefined;

  constructor(private chartService:ChartService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chartService.getChoixStats(this.domaine!).subscribe({
      next : (data)=>{
        console.log(data)
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Current Vallue',
              data: [data[0], data[1],data[2],data[3],data[4]],
              backgroundColor: [
                '#4FC3F7',
                '#AED581',
                '#FFD54F',
                '#BDBDBD',
                '#E57373'],
            },],
            labels: ['Famille','Amis','Réputation de l\'école','Ville de résidence','Choix personnel']
          },options: {
            plugins: {
              title: {
                display: true,
                text: 'L\'influence du choix du domaine'
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
