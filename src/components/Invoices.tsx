import { CompnayInvoices } from "../types/allData.types";
import { Invoice } from "./Invoice";
import styles from "./Invoices.module.css";

export const Invoices = ({
  invoicesData,
}: {
  invoicesData: CompnayInvoices[];
}) => {
  const dataLength = invoicesData.length;

  if (!dataLength) return <div>no data</div>;

  return (
    <div className={styles.invoicesBlock}>
      <h5>Invoices</h5>
      <div>{dataLength} of these things done</div>
      <div className={styles.invoicesTable}>
        <div className={styles.invoicesTableTr}>
          <span className={styles.invoicesTableHeader}>COMPANIES</span>
          <span className={styles.invoicesTableHeader}>INVOICES</span>
          <span className={styles.invoicesTableHeader}>INVOICES AMOUNT</span>
          <span className={styles.invoicesTableHeader}>DUE DATE</span>
        </div>
        {invoicesData.map((item, i) => (
          <Invoice
            companyName={item.companyName}
            invoiceNumber={item.invoiceNumber}
            invoiceAmount={item.invoiceAmount}
            dueDate={item.dueDate}
            key={item.invoiceNumber + i}
          />
        ))}
      </div>
    </div>
  );
};
