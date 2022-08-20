import styles from "./StateBlock.module.css";

export const StateBlock = ({
  icon,
  whichState,
  value,
}: {
  icon: JSX.Element;
  whichState: string;
  value: number;
}) => {
  return (
    <div className={styles.stateBlock}>
      <div className={styles.stateIcon}>{icon}</div>
      <div>
        <h5>{whichState}</h5>
        {value}
      </div>
    </div>
  );
};
