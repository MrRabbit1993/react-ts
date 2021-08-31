import { FC } from 'react'
import Menu, { MenuProps, MenuItemProps, SubMenuProps } from './menu'
import MenuItem from './menu-item'
import SubMenu from './sub-menu'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}
const MenuComponent = Menu as IMenuComponent
MenuComponent.Item = MenuItem
MenuComponent.SubMenu = SubMenu
export default MenuComponent
