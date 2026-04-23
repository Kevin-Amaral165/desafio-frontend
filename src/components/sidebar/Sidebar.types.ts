// Types
import type { Menu } from "../../pages/dashboard/Dashboard.types";

export type SidebarProps = {
  menus: Menu[];
  onSelectSubMenu: (id: number) => void;
  selectedSubMenuId?: number;
  width: number;
};