import { type StatusType, type Invoice } from "../domain/Invoice";
import { type InvoiceRepository } from "../domain/InvoiceRepository";

export class InvoiceFinder {
  invoiceRepository: InvoiceRepository;
  constructor(invoiceRepository: InvoiceRepository) {
    this.invoiceRepository = invoiceRepository;
  }

  find: () => Promise<Invoice[]> = async () => {
    return await this.invoiceRepository.find();
  };

  findByStatus: (statusTypes: StatusType[]) => Promise<Invoice[]> = async (
    statusTypes
  ) => {
    return await this.invoiceRepository.findByStatus(statusTypes);
  };
}
