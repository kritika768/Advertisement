import React from "react";
import Chart from "react-apexcharts";
import style from "./Table.module.css";

const DonutChart = () => {
  const data = [
    {
      group: "Male",
      clicks: 348,
      cost: "USD 12,528",
      conversion: 42,
      revenue: "USD 62,118",
    },
    {
      group: "Female",
      clicks: 692,
      cost: "USD 24,912",
      conversion: 35,
      revenue: "5,175",
    },
    {
      group: "Unknown",
      clicks: 105,
      cost: "USD 3,943",
      conversion: 3,
      revenue: "USD 4,489",
    },
  ];

  const chartOptions = {
    labels: data.map((item) => item.group),
    series: data.map((item) => item.clicks),
    colors: ["#FF6384", "#36A2EB", "#000000"],
  };

  return (
    <>

        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          width="380"
          className={style.donut}
        />
    </>
  );
};

export default DonutChart;
