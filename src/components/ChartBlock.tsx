import Chart from "react-apexcharts";
import { SingleChartData } from "../types/allData.types";
import styles from "./ChartBlock.module.css";

export const ChartBlock = (chartData:SingleChartData) => {
  return (
    <div className={styles.chartBlock}>
      <div className={styles.chart}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
      />
      </div>
      <label>Income by month</label>
    </div>
  );
};
