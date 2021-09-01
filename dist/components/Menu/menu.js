import React, { useState, cloneElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
export * from './type'
var Menu = function (props) {
  var className = props.className,
    mode = props.mode,
    style = props.style,
    children = props.children,
    defaultIndex = props.defaultIndex,
    onSelect = props.onSelect,
    defaultOpenSubMenus = props.defaultOpenSubMenus
  var _a = useState(defaultIndex),
    currentActive = _a[0],
    setActive = _a[1]
  var classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  var handlerClick = function (index) {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  var passContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handlerClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus
  }
  var renderChildren = function () {
    return React.Children.map(children, function (child, index) {
      var childElement = child
      var displayName = childElement.type.displayName
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return cloneElement(childElement, { index: index.toString() }) // 自动注入index,外层无需在手动加入index
      } else {
        console.error('Waring:Menu has a child which is not a MenuItem')
      }
    })
  }
  return React.createElement(
    'ul',
    { className: classes, style: style, 'data-testid': 'test-menu' },
    React.createElement(MenuContext.Provider, { value: passContext }, renderChildren())
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}
export default Menu
