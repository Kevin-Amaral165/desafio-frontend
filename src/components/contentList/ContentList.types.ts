// Types
import type { Item } from "../../pages/dashboard/Dashboard.types";

export type ContentListProps = {
  items: Item[];
  onToggleSelect: (id: number) => void;
  selectedItems: number[];
};