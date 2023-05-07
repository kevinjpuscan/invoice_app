import { CheckBox } from "../CheckBox/CheckBox";
import styles from "./CheckBoxList.module.scss";
import {
  type CheckBoxListProps,
  type CheckBoxListHandleChange,
} from "./CheckBoxList.types";

export function CheckBoxList({
  onChange,
  items,
}: CheckBoxListProps): JSX.Element {
  const handleChange: CheckBoxListHandleChange = (value, checked) => {
    const newItems = [...items];
    onChange(
      newItems.map((item) => {
        return item.value === value ? { ...item, checked } : item;
      })
    );
  };

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item.value}>
          <CheckBox
            label={item.label}
            checked={item.checked}
            onChange={(value) => {
              handleChange(item.value, value);
            }}
          />
        </div>
      ))}
    </div>
  );
}
