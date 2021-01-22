import React from 'react'
import './App.css'
import LikeButton from './LikeButton'
import PositionTr from './Position'
import useMousePosition from './hooks/MousePosition'
import useUrlLoader from './hooks/UrlLoader'
interface DataSource {
  message: string
  status: string
}
function App() {
  const point = useMousePosition()
  const [loading, data] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [point.x])
  const dataSource = data as DataSource
  return (
    <div className="App">
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
    </div>
  )
}

export default App
