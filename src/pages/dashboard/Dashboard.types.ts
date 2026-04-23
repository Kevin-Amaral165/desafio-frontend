import type { ViewMode } from "../../enum/enum";

export type SubMenu = {
  id: number;
  name: string;
};

export type Menu = {
  id: number;
  name: string;
  subMenus?: SubMenu[];
};

export type Item = {
  id: number;
  name: string;
  owner: string;
  subject: string;
  users?: string[];
};

type InboxCache = Record<number, Item[]>;

export type DashboardState = {
  inboxBySubMenu: InboxCache;
  isLoadingMenus: boolean;
  isLoadingItems: boolean;
  menus: Menu[];
  selectedItems: number[];
  selectedSubMenuId: number | null;
  trashItems: Item[];
  view: ViewMode;
};