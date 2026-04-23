// Libraries
import type { JSX } from "react";

// Store
import { useAuthStore } from "../../store/auth.store";

// Components
import { Dropdown } from "../dropdown/Dropdown";
import { Button } from "../button/Button";

// Enum
import { ButtonVariant, DropdownPosition } from "../../enum/enum";

// Styles
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

// Types
import type { SidebarProps } from "./Sidebar.types";

export function Sidebar({
  menus,
  onSelectSubMenu,
  selectedSubMenuId,
  width,
}: SidebarProps): JSX.Element {
  const logout: () => void = useAuthStore((state) => state.logout);

  return (
    <Container width={width}>
      <Profile>
        <AvatarWrapper>
          <Dropdown
            position={DropdownPosition.BOTTOM_RIGHT}
            trigger={<Button variant={ButtonVariant.ROUND}>OA</Button>}
            options={[
                { label: "Logout", onClick: logout },
                { label: "Register", disabled: true },
            ]}
          />
          <Status />
        </AvatarWrapper>
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