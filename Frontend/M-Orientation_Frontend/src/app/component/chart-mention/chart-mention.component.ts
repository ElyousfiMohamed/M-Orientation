import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Output} from "../../model/output";
import {ChartService} from "../../service/chart.service";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-chart-mention',
  templateUrl: './chart-mention.component.html',
  styleUrls: ['./chart-mention.component.css']
})
export class ChartMentionComponent implements OnInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  @Input() domaine: Output | undefined;
  constructor(private chartService:ChartService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.chartService.getMentionStats(this.domaine!).subscribe({
      next : (data)=>{
        console.log(data)
        this.canvas = this.mychart.nativeElement;
        this.ctx = this.canvas.getContext('2d');

        new Chart(this.ctx, {
          type: 'pie',
          data: {
            datasets: [{
              label: 'Current Vallue',
              data: [data[0],data[1],data[2], data[3]],
              backgroundColor: [
                '#BDBDBD',
                '#FFD54F',
                '#4FC3F7',
                '#AED581'],
            },],
            labels: ['Passable','Assez bien','Bien','Très Bien']
          },options: {
            plugins: {
              title: {
                display: true,
                text: 'Mention bac'
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
