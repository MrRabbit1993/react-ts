import React from 'react'
import './App.css'
import LikeButton from './LikeButton'
import PositionTr from './Position'
import useMousePosition from './hooks/MousePosition'
function App() {
  const point = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          x:{point.x},y:{point.y}
        </h1>
        <LikeButton />
        <PositionTr />
      </header>
    </div>
  )
}

export default App
