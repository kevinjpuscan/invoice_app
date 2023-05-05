import { type Invoice } from "./Invoice";

export interface InvoiceRepository {
  find: () => Promise<Invoice[]>;
}
