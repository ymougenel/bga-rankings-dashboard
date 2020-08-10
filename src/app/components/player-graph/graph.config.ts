export class GraphConfig {
  lineChartOptions: any = {
    responsive: true,
    legend: {
      position: 'right'
    },
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          // type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            reverse: true,
            stepSize: 1,
          }
        }
      ],
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day'
          }
        }
      ]
    },
    elements: {
      line: {
        fill: false
      }
    }
  };

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
}
