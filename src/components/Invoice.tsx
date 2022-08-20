import styles from "./Invoice.module.css";

export const Invoice = ({
  companyName,
  invoiceNumber,
  invoiceAmount,
  dueDate,
}: {
  companyName: string;
  invoiceNumber: string;
  invoiceAmount: string;
  dueDate: string;
}) => {
  return (
    <div className={styles.invoicesTableTr}>
      <span>{companyName}</span>
      <span>{invoiceNumber}</span>
      <span>{invoiceAmount}</span>
      <span>{dueDate}</span>
    </div>
  );
};
