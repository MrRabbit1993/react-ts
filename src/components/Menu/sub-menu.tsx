import React, { FC, useState, FunctionComponentElement, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
import { SubMenuProps, MenuItemProps } from './type'
const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': index === context.index
  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error('Waring:SubMenu has a child which is not a MenuItem')
      }
    })
    return <ul className="submenu">{childrenComponent}</ul>
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
