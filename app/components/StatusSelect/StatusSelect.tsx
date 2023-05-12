import { type CheckBoxListItem } from "@design-system/CheckBoxList/CheckBoxList.types";
import styles from "./StatusSelect.module.scss";
import { useState } from "react";
import { CheckBoxList } from "@design-system/CheckBoxList/CheckBoxList";
import IconArrow from "assets/icons/icon-arrow-down.svg";
import Image from "next/image";

export function StatusSelect(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [list, setList] = useState<CheckBoxListItem[]>([
    { label: "Item 1", value: "item-1", checked: false },
    { label: "Item 2", value: "item-2", checked: false },
    { label: "Item 3", value: "item-3", checked: false },
  ]);

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.select}>
      <div className={styles.label} onClick={toggleVisibility}>
        <span className={styles.text}>Filters:</span>
        <Image
          src={IconArrow}
          alt="icon arrow"
          className={`${styles.icon} ${isVisible ? styles.rotated : ""}`}
        />
      </div>
      <div
        className={`${styles.options} ${isVisible ? styles["is-visible"] : ""}`}
      >
        <CheckBoxList items={list} onChange={setList} />
      </div>
    </div>
  );
}
