import styles from "./InvoiceCard.module.scss";
import { Status } from "@design-system/Status/Status";
import { type Invoice } from "@domain/Invoice";

export function InvoiceCard({ invoice }: { invoice: Invoice }): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.identifier}>
        <div className={styles.code}>
          <span className={styles.index}>#</span>
          {invoice.id}
        </div>
        <div className={styles.customer}>{invoice.clientName}</div>
      </div>
      <div className={styles.information}>
        <div className={styles.details}>
          <div className={styles.date}>{invoice.createdAt}</div>
          <div className={styles.price}>£ 100.00</div>
        </div>
        <div className={styles.status}>
          <Status status={invoice.status} />
        </div>
      </div>
    </div>
  );
}
