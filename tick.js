import { createChart } from 'lightweight-charts';

const chart = createChart(document.body, { width: 600, height: 300 });
const lineSeries = chart.addLineSeries();

// Example data
lineSeries.setData([
    { time: '2021-04-01', value: 1500000.00 },
    { time: '2021-04-02', value: 2500000.50 },
    { time: '2021-04-03', value: 3500000.75 },
]);

chart.priceScale().applyOptions({
    tickMarkFormatter: (price) => {
        if (price >= 1000000) {
            return (price / 1000000).toFixed(2) + 'M';
        } else if (price >= 1000) {
            return (price / 1000).toFixed(2) + 'K';
        }
        return price.toFixed(2);
    },
});