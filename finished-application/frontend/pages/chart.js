import React from 'react';
import Chart from 'react-google-charts';

const LineData = [
  ['x', 'Average', 'Stock Trading'],
  ['JAN', 10000, 10000],
  ['FEB', 10000, 19000],
  ['MAR', 23000, 15000],
  ['APR', 17000, 90000],
  ['JUN', 18000, 10000],
  ['JUL', 9000, 5000],
  ['AUG', 11000, 3000],
  ['SEP', 27000, 19000],
  ['OCT', 27000, 19000],
  ['NOV', 27000, 18000],
  ['DES', 27000, 19000],
];
const LineChartOptions = {
  hAxis: {
    title: 'Date(Month)',
  },
  vAxis: {
    title: 'Price($)',
  },
  series: {
    1: { curveType: 'function' },
  },
};
function MultiLineChart() {
  return (
    <div className="container mt-5">
      <h2>React Google Line Chart Example</h2>
      <Chart
        width="1200px"
        height="800px"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}
export default MultiLineChart;

//
