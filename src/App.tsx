import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button'
function App() {
  return (
    <div className="App">
      <Button disabled>按钮</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        百度
      </Button>
    </div>
  )
}

export default App
