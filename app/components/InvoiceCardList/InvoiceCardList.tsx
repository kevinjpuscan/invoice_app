"use client";
import styles from "./InvoiceCardList.module.scss";
import { InvoiceCard } from "@components/InvoiceCard/InvoiceCard";
import { invoiceFinder } from "@injection";
import { useInvoices } from "./useInvoices";

export function InvoiceCardList(): JSX.Element {
  const invoices = useInvoices(invoiceFinder);
  return (
    <div className={styles.list}>
      {invoices.map((invoice) => (
        <InvoiceCard invoice={invoice} key={invoice.id} />
      ))}
    </div>
  );
}
