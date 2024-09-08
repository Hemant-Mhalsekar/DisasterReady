import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%", backgroundColor: "rgb(42, 42, 42)" },
  colors: ["rgb(0, 211, 190)", "rgb(0, 153, 255)"], // Set colors for datasets
  hAxis: {
    title: "Total Population",
    minValue: 0,
    textStyle: { color: "rgb(0, 211, 190)" },
    titleTextStyle: { color: "rgb(0, 211, 190)" },
  },
  vAxis: {
    title: "City",
    textStyle: { color: "rgb(0, 211, 190)" },
    titleTextStyle: { color: "rgb(0, 211, 190)" },
  },
  color: "rgb(0, 211, 190)",
  backgroundColor: "rgb(42, 42, 42)",
  titleTextStyle: { color: "rgb(0, 211, 190)" },
};

function ChartContainer({ mag }) {
  return (
    <div style={{
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3), 0 0 15px rgb(0, 211, 190)",
      backgroundColor: "rgb(42, 42, 42)",
      padding: "20px", // Ensure there's padding around the chart
      borderRadius: "8px", // Rounded corners for a modern look
      color: "rgb(0, 211, 190)"
    }}>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={mag}
        options={options}
      />
    </div>
  );
}

export default ChartContainer;
