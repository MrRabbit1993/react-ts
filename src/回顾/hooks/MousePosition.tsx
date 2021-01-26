import React, { useEffect, useState } from 'react'
const useMousePosition = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const updatePoint = (e: MouseEvent) => {
      setPoint({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updatePoint)
    return () => {
      document.removeEventListener('click', updatePoint)
    }
  }, []) // 使用空数组来限制不必要每次都执行effect
  return point
}
export default useMousePosition
