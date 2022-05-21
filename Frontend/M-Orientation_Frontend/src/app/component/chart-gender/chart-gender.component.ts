import {Component, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto'


@Component({
  selector: 'app-chart-gender',
  templateUrl: './chart-gender.component.html',
  styleUrls: ['./chart-gender.component.css']
})
export class ChartGenderComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'pie',
      data: {
        datasets: [{
          label: 'Current Vallue',
          data: [190, 50],
          backgroundColor: [
            '#FFC3C3',
            '#40DFEF'],
        },],
        labels: ['Femme', 'Homme']
      },
    });
  }

}
