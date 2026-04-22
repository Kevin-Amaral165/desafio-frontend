import type { Menu } from "./Sidebar.types";
import {
  Container,
  Profile,
  Avatar,
  Status,
  MenuItem,
  SubMenuItem,
  Count,
  MenuGroup,
} from "./Sidebar.style";

type Props = {
  menus: Menu[];
  selectedSubMenuId?: number;
  onSelectSubMenu: (id: number) => void;
  width: number;
};

export function Sidebar({
  menus,
  selectedSubMenuId,
  onSelectSubMenu,
  width,
}: Props) {
  return (
    <Container width={width}>
      <Profile>
        <Avatar>OA</Avatar>
        <Status />
      </Profile>

      {menus.map((menu) => (
        <MenuGroup key={menu.id}>
          <MenuItem>
            <span>{menu.label}</span>
            {menu.count && <Count>{menu.count}</Count>}
          </MenuItem>

          {menu.subMenus?.map((sub) => (
            <SubMenuItem
              key={sub.id}
              active={selectedSubMenuId === sub.id}
              onClick={() => onSelectSubMenu(sub.id)}
            >
              {sub.label}
            </SubMenuItem>
          ))}
        </MenuGroup>
      ))}
    </Container>
  );
}