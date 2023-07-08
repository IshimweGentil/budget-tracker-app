import React from "react";
import { Doughnut } from "react-chartjs-2";

const ChartComponent = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#00CC99",
          "#9933CC",
          "#FF9900",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#00CC99",
          "#9933CC",
          "#FF9900",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Chart</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default ChartComponent;
