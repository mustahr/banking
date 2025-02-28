"use client";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement);
import { Doughnut } from "react-chartjs-2";

const DoughnutCart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          cutout: "70%",
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutCart;
