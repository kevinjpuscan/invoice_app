import { useId } from "react";
import styles from "./CheckBox.module.scss";
import { type CheckBoxProps } from "./CheckBox.types";

export function CheckBox({
  onChange,
  checked,
  label,
}: CheckBoxProps): JSX.Element {
  const checkBoxId = useId();

  return (
    <>
      <input
        className={styles.input}
        checked={checked}
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
