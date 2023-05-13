"use client";

import { InvoiceCardList } from "@components/InvoiceCardList/InvoiceCardList";
import { HeaderInvoices } from "@components/HeaderInvoices/HeaderInvoices";
import { InvoiceFiltersProvider } from "@contexts/InvoiceFilters/InvoiceFiltersContext";
export default function App(): JSX.Element {
  return (
    <>
      <InvoiceFiltersProvider>
        <div style={{ padding: "36px 24px 12px 24px" }}>
          <HeaderInvoices />
        </div>
        <div style={{ padding: "12px 24px" }}>
          <InvoiceCardList />
        </div>
      </InvoiceFiltersProvider>
    </>
  );
}
