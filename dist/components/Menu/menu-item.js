import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
var MenuItem = function (props) {
  var className = props.className,
    index = props.index,
    disabled = props.disabled,
    children = props.children,
    style = props.style
  var context = useContext(MenuContext)
  var classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === context.index
  })
  var handlerClick = function () {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return React.createElement('li', { className: classes, style: style, onClick: handlerClick }, children)
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
