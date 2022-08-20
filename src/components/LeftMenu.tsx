import CheckMarkIcon from "../logos/CheckMarkIcon";
import styles from "./LeftMenu.module.css";

//hardcode the menu item for here now
//no select state for now
export const LeftMenu = () => {
  return (
    <>
      <div>display Logo</div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <CheckMarkIcon /> Dashboard
          </li>
          <li className={styles.menuItem}>
            <CheckMarkIcon /> Data Entry
          </li>
          <li className={styles.menuItem}>
            <CheckMarkIcon /> Documents
          </li>
          <li className={styles.menuItem}>
            <CheckMarkIcon /> Mechanical
          </li>
          <li className={styles.menuItem}>
            <CheckMarkIcon /> Invoices
          </li>
        </ul>
      </nav>
    </>
  );
};
