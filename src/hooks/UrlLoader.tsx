import { useState, useEffect } from 'react'

const useUrlLoader = (url: string, deps: any[] = []) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setData(res)
        setLoading(false)
      })
  }, deps)
  return [loading, data]
}
export default useUrlLoader
