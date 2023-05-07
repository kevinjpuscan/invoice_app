"use client";

import { InvoiceCardList } from "./components/InvoiceCardList/InvoiceCardList";
import { Button } from "@design-system/Button/Button";
import { CheckBoxList } from "./design-system/CheckBoxList/CheckBoxList";
import { useState } from "react";
import { type CheckBoxListItem } from "./design-system/CheckBoxList/CheckBoxList.types";
export default function App(): JSX.Element {
  const [list, setList] = useState<CheckBoxListItem[]>([
    { label: "Item 1", value: "item-1", checked: false },
    { label: "Item 2", value: "item-2", checked: false },
    { label: "Item 3", value: "item-3", checked: false },
  ]);

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <CheckBoxList
          items={list}
          onChange={(value) => {
            console.log(value);
            setList(value);
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
