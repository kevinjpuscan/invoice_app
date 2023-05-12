import styles from "./StatusSelect.module.scss";
import { useState } from "react";
import { CheckBoxList } from "@design-system/CheckBoxList/CheckBoxList";
import IconArrow from "assets/icons/icon-arrow-down.svg";
import Image from "next/image";
import { type CheckBoxListItem } from "@/app/design-system/CheckBoxList/CheckBoxList.types";
import { type StatusType } from "@/core/domain/Invoice";

interface StatusSelectProps {
  setFilters: (filters: StatusType[]) => void;
}

export function StatusSelect({ setFilters }: StatusSelectProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  const [options, setOptions] = useState<CheckBoxListItem[]>([
    { label: "Draft", value: "draft", checked: false },
    { label: "Pending", value: "pending", checked: false },
    { label: "Paid", value: "paid", checked: false },
  ]);

  const handleChange = (options: CheckBoxListItem[]): void => {
    setOptions(options);
    setFilters(
      options
        .filter((option) => option.checked)
        .map((option) => option.value as StatusType)
    );
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
        <CheckBoxList items={options} onChange={handleChange} />
      </div>
    </div>
  );
}
