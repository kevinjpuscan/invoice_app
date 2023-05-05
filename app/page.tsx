import { InvoiceCard } from "@/app/components/InvoiceCard/InvoiceCard";
export default function App(): JSX.Element {
  return (
    <div style={{ padding: "1rem" }}>
      <InvoiceCard
        code="RT3080"
        customer="Jensen Huang"
        date="Due  19 Aug 2021"
        price="1,800.90"
        status="paid"
        key="RT3080"
      />
      <div style={{ height: "20px" }}></div>
      <InvoiceCard
        code="RT3081"
        customer="Jensen Huang"
        date="Due  19 Aug 2021"
        price="1,800.90"
        status="pending"
        key="RT3081"
      />
      <div style={{ height: "20px" }}></div>
      <InvoiceCard
        code="RT3082"
        customer="Jensen Huang"
        date="Due  19 Aug 2021"
        price="1,800.90"
        status="draft"
        key="RT3082"
      />
    </div>
  );
}
