"use client";
import { useState, useEffect, useContext } from "react";
import styles from "./InvoiceCardList.module.scss";
import { InvoiceCard } from "@components/InvoiceCard/InvoiceCard";
import { invoiceFinder } from "@injection";
import { type Invoice } from "@/core/domain/Invoice";
import { InvoiceFiltersContext } from "@/app/contexts/InvoiceFilters/InvoiceFiltersContext";

export function InvoiceCardList(): JSX.Element {
  const { filters } = useContext(InvoiceFiltersContext);

  const [invoices, setInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
    invoiceFinder
      .findByStatus(filters)
      .then((invoices) => {
        setInvoices(invoices);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filters]);

  return (
    <div className={styles.list}>
      {invoices.map((invoice) => (
        <InvoiceCard invoice={invoice} key={invoice.id} />
      ))}
    </div>
  );
}
