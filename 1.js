import React, { useEffect, useRef, useState } from 'react';

const ChartComponent = ({ data }) => {
  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  // Function to create the chart
  const createChart = () => {
    if (chartContainerRef.current) {
      // Assume createChart is a function that initializes the chart
      const newChart = createChartInstance(chartContainerRef.current);
      setChart(newChart);
    }
  };

  // Function to update chart size
  const updateChartSize = () => {
    if (chart && chartContainerRef.current) {
      const width = chartContainerRef.current.clientWidth;
      const height = chartContainerRef.current.clientHeight;
      chart.resize(width, height);
    }
  };

  // Initialize chart and set up resize observer
  useEffect(() => {
    createChart();

    // Observe resize events on the chart container
    const resizeObserver = new ResizeObserver(() => {
      updateChartSize();
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);

  // Update chart data and size when data changes
  useEffect(() => {
    if (chart && data) {
      // Update the chart with new data
      chart.updateData(data);
      updateChartSize();
    }
  }, [data, chart]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }}>
      {/* Your chart rendering code here */}
    </div>
  );
};

// Mock function to create a chart instance
const createChartInstance = (container) => {
  // Implement your chart creation logic here
  return {
    resize: (width, height) => {
      console.log(`Chart resized to: ${width}x${height}`);
      // Implement your resize logic here
    },
    updateData: (data) => {
      console.log('Chart data updated:', data);
      // Implement your data update logic here
    }
  };
};

export default ChartComponent;