export interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: CheckBoxOnChange;
}

export type CheckBoxOnChange = (value: boolean) => void;
