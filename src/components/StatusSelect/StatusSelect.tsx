import styles from "./StatusSelect.module.scss";
import { useState } from "react";
import { CheckBoxList } from "@/src/design-system/CheckBoxList/CheckBoxList";
import IconArrow from "assets/icons/icon-arrow-down.svg";
import Image from "next/image";
import { type CheckBoxListItem } from "@design-system/CheckBoxList/CheckBoxList.types";
import { StatusType } from "@domain/Invoice";

interface StatusSelectProps {
  setFilters: (filters: StatusType[]) => void;
}

export function StatusSelect({ setFilters }: StatusSelectProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  const [options, setOptions] = useState<CheckBoxListItem[]>([
    { label: "Draft", value: StatusType.DRAFT, checked: false },
    { label: "Pending", value: StatusType.PENDING, checked: false },
    { label: "Paid", value: StatusType.PAID, checked: false },
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
