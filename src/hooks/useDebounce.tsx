import { useState, useEffect } from 'react'

function useDebounce(value: any, delay = 300) {
  console.error('进入-----------', value)

  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    console.log('添加');
    
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      console.log('执行了删除')
      clearTimeout(handler)
    }
  }, [value, delay])
  console.log('返回的结果是+++++++', debouncedValue)
  return debouncedValue
}

export default useDebounce
