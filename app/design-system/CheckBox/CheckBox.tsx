import { useId } from "react";
import styles from "./CheckBox.module.scss";

type OnChangeFunction = (value: boolean) => void;

export function CheckBox({
  onChange,
  value,
  label,
}: {
  onChange: OnChangeFunction;
  value: boolean;
  label: string;
}): JSX.Element {
  const checkBoxId = useId();

  return (
    <>
      <input
        className={styles.input}
        checked={value}
        onChange={(event) => {
          onChange(event.target.checked);
        }}
        id={checkBoxId}
        type="checkbox"
      ></input>
      <label className={styles.label} htmlFor={checkBoxId}>
        {label}
      </label>
    </>
  );
}
