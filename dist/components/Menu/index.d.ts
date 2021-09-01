import { FC } from 'react'
import { MenuProps, MenuItemProps, SubMenuProps } from './menu'
export declare type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}
declare const MenuComponent: IMenuComponent
export default MenuComponent
