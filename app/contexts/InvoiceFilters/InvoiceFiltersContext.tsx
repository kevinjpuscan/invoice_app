import { type StatusType } from "@/core/domain/Invoice";
import { createContext, useState } from "react";

export const InvoiceFiltersContext = createContext<{
  filters: StatusType[];
  setFilters: (filters: StatusType[]) => void;
}>({
  filters: [],
  setFilters: () => {
    console.log("InvoiceFiltersContext");
  },
});

export function InvoiceFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [filters, setFilters] = useState<StatusType[]>([]);
  return (
    <InvoiceFiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </InvoiceFiltersContext.Provider>
  );
}
