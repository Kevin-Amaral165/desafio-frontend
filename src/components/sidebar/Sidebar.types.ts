export type SubMenu = {
  id: number;
  label: string;
};

export type Menu = {
  count?: number;
  id: number;
  label: string;
  subMenus?: SubMenu[];
};

export type SidebarProps = {
  menus: Menu[];
  onSelectSubMenu: (id: number) => void;
  selectedSubMenuId?: number;
  width: number;
};