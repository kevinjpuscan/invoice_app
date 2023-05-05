"use client";
import { useState, useEffect } from "react";
import styles from "./InvoiceCardList.module.scss";
import { InvoiceCard } from "@components/InvoiceCard/InvoiceCard";
import { invoiceFinder } from "@injection";
import { type Invoice } from "@/core/domain/Invoice";

export function InvoiceCardList(): JSX.Element {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
    invoiceFinder
      .find()
      .then((invoices) => {
        setInvoices(invoices);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.list}>
      {invoices.map((invoice) => (
        <InvoiceCard invoice={invoice} key={invoice.id} />
      ))}
    </div>
  );
}
