import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonSize, ButtonType } from './components/Button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menu-item'
import SubMenu from './components/Menu/sub-menu'
import Transition from './components/Transition'
library.add(faUserSecret)
var App = function () {
  var _a = useState(false),
    show = _a[0],
    setShow = _a[1]
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      Menu,
      {
        defaultIndex: '0',
        onSelect: function (index) {
          console.log(index)
        }
      },
      React.createElement(MenuItem, null, 'cool link'),
      React.createElement(MenuItem, { disabled: true }, 'cool link2'),
      React.createElement(
        SubMenu,
        { title: 'dropdown' },
        React.createElement(MenuItem, null, 'dropdown1'),
        React.createElement(MenuItem, null, 'dropdown2')
      ),
      React.createElement(MenuItem, null, 'cool link3')
    ),
    React.createElement(
      Menu,
      {
        defaultIndex: '0',
        defaultOpenSubMenus: ['2'],
        mode: 'vertical',
        onSelect: function (index) {
          console.log(index)
        }
      },
      React.createElement(MenuItem, null, 'cool link'),
      React.createElement(MenuItem, { disabled: true }, 'cool link2'),
      React.createElement(
        SubMenu,
        { title: 'dropdown' },
        React.createElement(MenuItem, null, 'dropdown1'),
        React.createElement(MenuItem, null, 'dropdown2')
      ),
      React.createElement(MenuItem, null, 'cool link3')
    ),
    React.createElement(Button, { disabled: true }, '\u6309\u94AE'),
    React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Large }, 'hello'),
    React.createElement(Button, { btnType: ButtonType.Primary, size: ButtonSize.Small }, 'hello'),
    React.createElement(Button, { btnType: ButtonType.Danger, size: ButtonSize.Small }, 'danger'),
    React.createElement(Button, { btnType: ButtonType.Link, href: 'http://www.baidu.com' }, '\u767E\u5EA6'),
    React.createElement(
      Button,
      {
        btnType: ButtonType.Link,
        href: 'http://www.baidu.com',
        disabled: true
      },
      '\u767E\u5EA6'
    ),
    React.createElement(
      Button,
      {
        size: ButtonSize.Large,
        onClick: function () {
          setShow(!show)
        }
      },
      'Toggle'
    ),
    React.createElement(
      Transition,
      { in: show, timeout: 300, animation: 'zoom-in-left' },
      React.createElement('div', null, React.createElement('p', null, 'edit'))
    )
  )
}
export default App
