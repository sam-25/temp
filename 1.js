import React, { useEffect, useRef, useState } from 'react';

const ChartComponent = ({ data }) => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // Function to update the chart width
  const updateChartWidth = () => {
    if (chartContainerRef.current) {
      setChartWidth(chartContainerRef.current.clientWidth);
    }
  };

  // Effect to set initial chart width and add event listener for resize
  useEffect(() => {
    updateChartWidth();

    window.addEventListener('resize', updateChartWidth);
    return () => window.removeEventListener('resize', updateChartWidth);
  }, []);

  // Effect to update chart dimensions when data changes
  useEffect(() => {
    if (data) {
      updateChartWidth();
      // Add your code here to plot/update the chart using chartWidth and data
    }
  }, [data, chartWidth]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }}>
      {/* Your chart rendering code here */}
    </div>
  );
};

export default ChartComponent;