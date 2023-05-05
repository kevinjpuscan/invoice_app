export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress: SenderAddress;
  items: Item[];
  total: number;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface SenderAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
