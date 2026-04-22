export type SubMenu = {
  id: number;
  label: string;
};

export type Menu = {
  id: number;
  label: string;
  count?: number;
  subMenus?: SubMenu[];
};