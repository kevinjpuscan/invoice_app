import { Button } from "@design-system/Button/Button";
import { StatusSelect } from "@components/StatusSelect/StatusSelect";
import styles from "./HeaderInvoices.module.scss";
import { InvoiceFiltersContext } from "@contexts/InvoiceFilters/InvoiceFiltersContext";
import { useContext } from "react";
import { type StatusType } from "@domain/Invoice";

export function HeaderInvoices(): JSX.Element {
  const { setFilters }: { setFilters: (filters: StatusType[]) => void } =
    useContext(InvoiceFiltersContext);

  return (
    <div className={styles.header}>
      <div className={styles["title-container"]}>
        <h2 className={styles.title}>Invoices</h2>
        <span className={styles.subtitle}>7 invoices</span>
      </div>
      <div className={styles.actions}>
        <StatusSelect setFilters={setFilters} />
        <Button type="plus">New</Button>
      </div>
    </div>
  );
}
