import React, { FC, useState, FunctionComponentElement, useContext, cloneElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
import { SubMenuProps, MenuItemProps } from './type'
import { setTimeout } from 'timers'
import Icon from './../Icon'
const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpend)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': index === context.index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handlerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? { onClick: handlerClick } : {}
  const mouseEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return cloneElement(childElement, { index: `${index}-${i}` }) // 自动注入index,外层无需在手动加入index
      } else {
        console.error('Waring:SubMenu has a child which is not a MenuItem')
      }
    })
    return <ul className={subMenuClasses}>{childrenComponent}</ul>
  }
  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
