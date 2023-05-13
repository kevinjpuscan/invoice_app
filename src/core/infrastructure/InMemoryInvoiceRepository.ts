import { type StatusType, type Invoice } from "../domain/Invoice";
import { type InvoiceRepository } from "../domain/InvoiceRepository";
import inMemoryInvoices from "@/data/data.json";

export class InMemoryInvoiceRepository implements InvoiceRepository {
  private readonly invoices: Invoice[] = inMemoryInvoices as Invoice[];
  findByStatus: (statusTypes: StatusType[]) => Promise<Invoice[]> = async (
    statusTypes
  ) => {
    return await new Promise((resolve) => {
      resolve(
        statusTypes.length === 0
          ? this.invoices
          : this.invoices.filter((invoice) =>
              statusTypes.includes(invoice.status)
            )
      );
    });
  };

  find: () => Promise<Invoice[]> = async () => {
    return await new Promise((resolve) => {
      resolve(this.invoices);
    });
  };
}
