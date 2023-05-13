import { type StatusType, type Invoice } from "./Invoice";

export interface InvoiceRepository {
  find: () => Promise<Invoice[]>;
  findByStatus: (statusTypes: StatusType[]) => Promise<Invoice[]>;
}
