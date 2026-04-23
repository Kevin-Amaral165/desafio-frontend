import { useAuthStore } from "../../store/auth.store";
import { Dropdown } from "../dropdown/Dropdown";
import { Button } from "../button/Button";

import type { Menu } from "./Sidebar.types";
import {
  Container,
  Profile,
  Status,
  MenuItem,
  SubMenuItem,
  Count,
  MenuGroup,
  AvatarWrapper,
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
  const logout = useAuthStore((state) => state.logout);

  return (
    <Container width={width}>
      {/* PROFILE + DROPDOWN */}
      <Profile>
        <AvatarWrapper>
            <Dropdown
            position="bottom-left"
            trigger={<Button variant="round">OA</Button>}
            options={[
                { label: "Logout", onClick: logout },
                { label: "Register", disabled: true },
            ]}
            />
            <Status />
        </AvatarWrapper>
        </Profile>

      {/* MENUS */}
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