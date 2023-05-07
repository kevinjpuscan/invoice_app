export interface CheckBoxListProps {
  items: CheckBoxListItem[];
  onChange: CheckBoxListOnChange;
}

export type CheckBoxListOnChange = (value: CheckBoxListItem[]) => void;

export interface CheckBoxListItem {
  value: string;
  label: string;
  checked: boolean;
}

export type CheckBoxListHandleChange = (
  value: string,
  checked: boolean
) => void;
