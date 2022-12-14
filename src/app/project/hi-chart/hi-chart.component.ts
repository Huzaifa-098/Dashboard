import { Component, NgModule, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
// import {HighchartsChartModule} from 'angular'

@Component({
  selector: 'app-hi-chart',
  templateUrl: './hi-chart.component.html',
  styleUrls: ['./hi-chart.component.css'],
  // imports: [HighchartsChartModule],
})
export class HiChartComponent implements OnInit {
  title = 'myHighchart';

  data = [
    {
      name: 'Dates',
      data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654],
    },
    {
      name: 'MixDryFruit',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654],
    },
    {
      name: 'Almonds',
      data: [300, 400, 355, 144, 477, 677, 944, 967, 666, 558, 456, 654],
    },
    {
      name: 'Nuts',
      data: [0, 400, 355, 144, 477, 677, 944, 967, 666, 558, 900, 1500],
    },
    {
      name: 'Ajwa Dates',
      data: [200, 400, 355, 144, 477, 677, 944, 967, 666, 558, 1000, 1100],
    },
    {
      name: 'Apricot',
      data: [100, 400, 355, 144, 477, 677, 944, 967, 666, 558, 456, 1250],
    },
  ];

  highcharts = Highcharts;
  chartOptions: any = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Monthly Site Visitor',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Visitors',
      },
    },
    series: this.data,
  };

  constructor() {}

  ngOnInit(): void {}
}
