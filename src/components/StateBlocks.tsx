import { StateBlockData } from "../types/allData.types";
import { StateBlock } from "./StateBlock";
import styles from "./StateBlocks.module.css";
export const StateBlocks = ({
  stateBlockData,
}: {
  stateBlockData: StateBlockData[];
}) => {
  const dataLength = stateBlockData.length;

  if (!dataLength) return <div>no data for state blocks</div>;

  return (
    <div className={styles.stateBlockContainer}>
      {stateBlockData.map((item, i) => (
        <StateBlock
          icon={item.icon}
          whichState={item.whichState}
          value={item.value}
          key={item.value+i}
        />
      ))}
    </div>
  );
};
