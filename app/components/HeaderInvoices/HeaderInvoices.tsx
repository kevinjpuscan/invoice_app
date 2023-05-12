import { Button } from "@design-system/Button/Button";
import { StatusSelect } from "@components/StatusSelect/StatusSelect";
import styles from "./HeaderInvoices.module.scss";

export function HeaderInvoices(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles["title-container"]}>
        <h2 className={styles.title}>Invoices</h2>
        <span className={styles.subtitle}>7 invoices</span>
      </div>
      <div className={styles.actions}>
        <StatusSelect />
        <Button type="plus">New</Button>
      </div>
    </div>
  );
}
