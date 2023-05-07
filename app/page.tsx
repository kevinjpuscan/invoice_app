"use client";

import { InvoiceCardList } from "./components/InvoiceCardList/InvoiceCardList";
import { Button } from "@design-system/Button/Button";
import { CheckBox } from "./design-system/CheckBox/CheckBox";
import { useState } from "react";
export default function App(): JSX.Element {
  const [check, setCheck] = useState(true);
  const [check2, setCheck2] = useState(true);
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <CheckBox
          checked={check}
          label="Check me"
          onChange={(value) => {
            setCheck(value);
            console.log(value);
          }}
        />
        <CheckBox
          checked={check2}
          label="Check me"
          onChange={(value) => {
            setCheck2(value);
            console.log(value);
          }}
        />
        <Button type="plus">New</Button>
      </div>
      <div style={{ padding: "1rem" }}>
        <InvoiceCardList />
      </div>
    </>
  );
}
