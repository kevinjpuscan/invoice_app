import { InvoiceCardList } from "./components/InvoiceCardList/InvoiceCardList";
import { Button } from "@design-system/Button/Button";
export default function App(): JSX.Element {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Button type="plus">New</Button>
      </div>
      <div style={{ padding: "1rem" }}>
        <InvoiceCardList />
      </div>
    </>
  );
}
