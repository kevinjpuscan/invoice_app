"use client";
import { useState, useEffect, useContext } from "react";
import { type Invoice } from "@/core/domain/Invoice";
import { InvoiceFiltersContext } from "@/app/contexts/InvoiceFilters/InvoiceFiltersContext";
import { type InvoiceFinder } from "@/core/application/InvoiceFinder";

export const useInvoices = (invoiceFinder: InvoiceFinder): Invoice[] => {
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
  }, [filters, invoiceFinder]);
  return invoices;
};
