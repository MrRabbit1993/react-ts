import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button'
import Menu from './components/Menu'
import MenuItem from './components/Menu/menu-item'
import SubMenu from './components/Menu/sub-menu'
function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          console.log(index)
        }}>
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>

      <Menu
        defaultIndex="0"
        defaultOpenSubMenus={['2']}
        mode="vertical"
        onSelect={(index) => {
          console.log(index)
        }}>
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <Button disabled>按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        百度
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        百度
      </Button>
    </div>
  )
}

export default App
