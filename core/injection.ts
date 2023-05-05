import { InMemoryInvoiceRepository } from "./infrastructure/InMemoryInvoiceRepository";
import { InvoiceFinder } from "./application/InvoiceFinder";

const inMemoryInvoiceRepository = new InMemoryInvoiceRepository();
const invoiceFinder = new InvoiceFinder(inMemoryInvoiceRepository);

export { invoiceFinder };
