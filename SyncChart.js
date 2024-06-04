import React from 'react';
import ReactApexChart from 'react-apexcharts';

class SyncedCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineChartOptions: {
        series: [{
          name: 'Line Series',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        colors: ['#00E396'],
        chart: {
          id: 'line-1',
          group: 'social',
          type: 'line',
        },
        yaxis: {
          labels: {
            minWidth: 40
          }
        }
      },
      areaChartOptions: {
        series: [{
          name: 'Area Series',
          data: [23, 42, 35, 27, 43, 22, 17, 29, 43]
        }],
        colors: ['#008FFB'],
        chart: {
          id: 'area-1',
          group: 'social',
          type: 'area',
        },
        yaxis: {
          labels: {
            minWidth: 40
          }
        }
      },
      globalOptions: {
        chart: {
          height: 160,
        },
        dataLabels: {
          enabled: false
        }
      }
    };
  }

  componentDidMount() {
    window.Apex = this.state.globalOptions;
  }

  render() {
    return (
      <div id="synced-charts">
        <div id="chart-line">
          <ReactApexChart
            options={this.state.lineChartOptions}
            series={this.state.lineChartOptions.series}
            type="line"
            height={160}
          />
        </div>
        <div id="chart-area">
          <ReactApexChart
            options={this.state.areaChartOptions}
            series={this.state.areaChartOptions.series}
            type="area"
            height={160}
          />
        </div>
      </div>
    );
  }
}

export default SyncedCharts;