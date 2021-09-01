import React, { useState, useContext, cloneElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './context'
import { setTimeout } from 'timers'
import Icon from './../Icon'
import Transition from './../Transition'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var SubMenu = function (props) {
  var index = props.index,
    title = props.title,
    children = props.children,
    className = props.className
  var context = useContext(MenuContext)
  var openSubMenus = context.defaultOpenSubMenus
  var isOpend = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false
  var _a = useState(isOpend),
    menuOpen = _a[0],
    setOpen = _a[1]
  var classes = classNames('menu-item submenu-item', className, {
    'is-active': index === context.index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  var handlerClick = function (e) {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  var timer
  var handleMouse = function (e, toggle) {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(function () {
      setOpen(toggle)
    }, 300)
  }
  var clickEvents = context.mode === 'vertical' ? { onClick: handlerClick } : {}
  var mouseEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: function (e) {
            return handleMouse(e, true)
          },
          onMouseLeave: function (e) {
            return handleMouse(e, false)
          }
        }
      : {}
  var renderChildren = function () {
    var subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childElement = child
      if (childElement.type.displayName === 'MenuItem') {
        return cloneElement(childElement, { index: index + '-' + i }) // 自动注入index,外层无需在手动加入index
      } else {
        console.error('Waring:SubMenu has a child which is not a MenuItem')
      }
    })
    return React.createElement(
      Transition,
      { in: menuOpen, timeout: 300, animation: 'zoom-in-top' },
      React.createElement('ul', { className: subMenuClasses }, childrenComponent)
    )
  }
  return React.createElement(
    'li',
    __assign({ key: index, className: classes }, mouseEvents),
    React.createElement(
      'div',
      __assign({ className: 'submenu-title' }, clickEvents),
      title,
      React.createElement(Icon, { icon: 'angle-down', className: 'arrow-icon' })
    ),
    renderChildren()
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu
