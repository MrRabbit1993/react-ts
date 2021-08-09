import React, { createContext } from 'react'
import './App.scss'
import LikeButton from './LikeButton'
import PositionTr from './Position'
import useMousePosition from './hooks/MousePosition'
import useUrlLoader from './hooks/UrlLoader'
interface DataSource {
  message: string
  status: string
}
interface ThemeProps {
  [key: string]: { color: string; background: string }
}
const themes: ThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}
export const ThemeContext = createContext(themes.light)
function App() {
  const point = useMousePosition()
  const [loading, data] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  const dataSource = data as DataSource
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <header className="App-header">
          <h1>
            x:{point.x},y:{point.y}
          </h1>
          <div>
            <p>状态:{loading ? '请求中' : '请求完毕'}</p>
            {!loading ? <img src={dataSource.message} alt="" /> : null}
          </div>
          <LikeButton />
          <PositionTr />
        </header>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
