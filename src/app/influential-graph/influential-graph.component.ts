import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-influential-graph',
  templateUrl: './influential-graph.component.html',
  styleUrls: ['./influential-graph.component.scss']
})
export class InfluentialGraphComponent implements OnInit {
  public activity: any;
  public xData: any;
  public label: any;
  options1:any;
  options2:any;

  constructor() {

    
    this.options2 = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0
          }
      },
      title: {
          text: 'Questions Distribution'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          type: 'pie',
          name: 'Distribution',
          data: [
              ['Honesty & Integrity', 7.5],
              ['Focus', 7.5],
              {
                  name: 'Team Interaction',
                  y: 35,
                  sliced: true,
                  selected: true
              },
              ['Communication', 20],
              ['Confidence', 15],
              ['Passion about work', 15]
          ]
      }]
  };

  this.options1 = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Influentiality'
    },
    subtitle: {
        text: ''
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Skills %',
        data: [
            ['Vikrant', 10],
            ['Rajat', 38],
            ['Sachin', 45],
            ['Swapnil', 30],
             ['Sahil', 100],
             ['Ashish', 0],
        ]
    }]
};
   }

  ngOnInit(): void {
    Highcharts.chart('container1', this.options1);
    Highcharts.chart('container2', this.options2);
  }

}
