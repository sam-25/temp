import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const SyncedCharts = () => {
  const [lineChartOptions, setLineChartOptions] = useState({
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
  });

  const [areaChartOptions, setAreaChartOptions] = useState({
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
  });

  const globalOptions = {
    chart: {
      height: 160,
    },
    dataLabels: {
      enabled: false
    }
  };

  useEffect(() => {
    window.Apex = globalOptions;
  }, [globalOptions]);

  return (
    <div id="synced-charts">
      <div id="chart-line">
        <ReactApexChart
          options={lineChartOptions}
          series={lineChartOptions.series}
          type="line"
          height={160}
        />
      </div>
      <div id="chart-area">
        <ReactApexChart
          options={areaChartOptions}
          series={areaChartOptions.series}
          type="area"
          height={160}
        />
      </div>
    </div>
  );
};

export default SyncedCharts;