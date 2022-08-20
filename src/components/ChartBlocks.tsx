import { SingleChartData } from "../types/allData.types";
import { ChartBlock } from "./ChartBlock";
import styles from "./ChartBlocks.module.css";

export const ChartBlocks = ({
  chartInfo,
}: {
  chartInfo: SingleChartData[];
}) => {
  const dataLength = chartInfo.length;

  if (!dataLength) return <div>no chart</div>;

  return (
    <div className={styles.chartsContainer}>
      {chartInfo.map((item, i) => (
        <ChartBlock {...item} key={"chart" + i} />
      ))}
    </div>
  );
};
