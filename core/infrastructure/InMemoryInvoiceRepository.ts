import { type Invoice } from "../domain/Invoice";
import { type InvoiceRepository } from "../domain/InvoiceRepository";
import inMemoryInvoices from "@/data/data.json";

export class InMemoryInvoiceRepository implements InvoiceRepository {
  find: () => Promise<Invoice[]> = async () => {
    return await new Promise((resolve) => {
      resolve(inMemoryInvoices as Invoice[]);
    });
  };
}
