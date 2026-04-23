// Libraries
import type { JSX } from "react";
import { useTranslation } from "react-i18next";

// Store
import { useAuthStore } from "../../store/auth.store";

// Config
import { menuMapper } from "../../config/mapper";

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
  MenuGroup,
  AvatarWrapper,
} from "./Sidebar.style";

// Types
import type { SidebarProps } from "./Sidebar.types";
import type { Menu, SubMenu } from "../../pages/dashboard/Dashboard.types";

export function Sidebar({
  menus,
  onSelectSubMenu,
  selectedSubMenuId,
  width,
}: SidebarProps): JSX.Element {
  const { t } = useTranslation();
  const logout: () => void = useAuthStore((state) => state.logout);

  const resolveKey: (label: string) => string = (label: string) => {
    return menuMapper[label] ?? label;
  };

  return (
    <Container width={width}>
      <Profile>
        <AvatarWrapper>
          <Dropdown
            position={DropdownPosition.BOTTOM_RIGHT}
            trigger={<Button variant={ButtonVariant.ROUND}>KA</Button>}
            options={[
              { label: t("logout"), onClick: logout },
              { label: t("register"), disabled: true },
            ]}
          />
          <Status />
        </AvatarWrapper>
      </Profile>

      {menus?.map((menu: Menu) => (
        <MenuGroup key={menu.id}>
          <MenuItem>
            <span>{t(resolveKey(menu.name))}</span>
          </MenuItem>

          {(menu.subMenus || []).map((sub: SubMenu) => (
            <SubMenuItem
              key={sub.id}
              active={selectedSubMenuId === sub.id}
              onClick={() => onSelectSubMenu(sub.id)}
            >
              {t(resolveKey(sub.name))}
            </SubMenuItem>
          ))}
        </MenuGroup>
      ))}
    </Container>
  );
}