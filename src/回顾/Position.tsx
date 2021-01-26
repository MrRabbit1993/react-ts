import React, { useEffect, useState, FC } from 'react'
const PositionTr: FC = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('副作用')
    const updatePoint = (e: MouseEvent) => {
      console.log('设置')
      setPoint({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updatePoint)
    return () => {
      console.log('移出')
      document.removeEventListener('click', updatePoint)
    }
  }, []) // 使用空数组来限制不必要每次都执行effect
  console.log('render 之前')
  return (
    <p>
      x:{point.x},y:{point.y}
    </p>
  )
}
export default PositionTr
