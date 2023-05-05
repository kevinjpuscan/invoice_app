import styles from "./invoiceCard.module.scss";
import { Status } from "@design-system/Status/Status";

interface InvoiceCardProps {
  code: string;
  customer: string;
  date: string;
  price: string;
  status: "pending" | "paid" | "draft";
}
export function InvoiceCard({
  code,
  customer,
  date,
  price,
  status,
}: InvoiceCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.identifier}>
        <div className={styles.code}>
          {" "}
          <span className={styles.index}>#</span>
          {code}
        </div>
        <div className={styles.customer}>{customer}</div>
      </div>
      <div className={styles.information}>
        <div className={styles.details}>
          <div className={styles.date}>{date}</div>
          <div className={styles.price}>£ {price}</div>
        </div>
        <div className={styles.status}>
          <Status status={status} />
        </div>
      </div>
    </div>
  );
}
