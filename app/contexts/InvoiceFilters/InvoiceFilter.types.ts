import { type CheckBoxListItem } from "@/app/design-system/CheckBoxList/CheckBoxList.types";
import { type StatusType } from "@/core/domain/Invoice";

export interface InvoiceFilter extends CheckBoxListItem {
  label: string;
  value: StatusType;
  checked: boolean;
}
