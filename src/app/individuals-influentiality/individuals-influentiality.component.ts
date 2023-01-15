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
  selector: 'app-individuals-influentiality',
  templateUrl: './individuals-influentiality.component.html',
  styleUrls: ['./individuals-influentiality.component.scss']
})
export class IndividualsInfluentialityComponent implements OnInit {
  public activity: any;
  public xData: any;
  public label: any;
  sahil:any;
  sachin:any;
  rajat:any;
  swapnil:any;
  vikrant:any;
  ashish:any;
  constructor() { 
    this.sahil = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: 'Sahil'
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
              ['Honesty & Integrity', 30],
              ['Focus', 40],
              ['Team Interaction', 70],
              ['Communication', 50],
               ['Confidence', 60],
               ['Passion about work', 55],
          ]
      }]
  };
  this.sachin = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Sachin'
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
            ['Honesty & Integrity', 40],
            ['Focus', 55],
            ['Team Interaction', 60],
            ['Communication', 70],
             ['Confidence', 34],
             ['Passion about work', 50],
        ]
    }]
};

this.rajat = {
  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Rajat'
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
          ['Honesty & Integrity', 60],
          ['Focus', 40],
          ['Team Interaction', 25],
          ['Communication', 40],
           ['Confidence', 30],
           ['Passion about work', 32],
      ]
  }]
};


this.swapnil = {
  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Swapnil'
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
          ['Honesty & Integrity', 50],
          ['Focus', 20],
          ['Team Interaction', 40],
          ['Communication', 30],
           ['Confidence', 45],
           ['Passion about work', 37],
      ]
  }]
};

this.vikrant = {
  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Vikrant'
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
          ['Honesty & Integrity', 35],
          ['Focus', 42],
          ['Team Interaction', 32],
          ['Communication', 30],
           ['Confidence', 37],
           ['Passion about work', 20],
      ]
  }]
};
this.ashish = {
  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      }
  },
  title: {
      text: 'Ashish'
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
          ['Honesty & Integrity', 20],
          ['Focus', 15],
          ['Team Interaction', 50],
          ['Communication', 25],
           ['Confidence', 17],
           ['Passion about work', 15],
      ]
  }]
};
  }

  ngOnInit(): void {
    Highcharts.chart('container1', this.sahil);
    Highcharts.chart('container2', this.sachin);
    Highcharts.chart('container3', this.rajat);
    Highcharts.chart('container4', this.swapnil);
    Highcharts.chart('container5', this.vikrant);
    Highcharts.chart('container6', this.ashish);
  }

}
