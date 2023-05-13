export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: StatusType;
  senderAddress: SenderAddress;
  clientAddress: SenderAddress;
  items: Item[];
  total: number;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export enum StatusType {
  PENDING = "pending",
  PAID = "paid",
  DRAFT = "draft",
}
