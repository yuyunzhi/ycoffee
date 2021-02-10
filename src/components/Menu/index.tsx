import { FC } from "react";

import Menu, { MenuProps } from "./menu";
import SubMenu, { SubMenuProps } from "./subMenu";
import MenuItem, { MenuItemProps } from "./menuItem";

//  因为是组件类型，所以要加上FC表示是组件,<>里的表示是该组件的参数类型 所以要FC<MenuProps>
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
