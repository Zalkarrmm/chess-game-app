import { useState, useEffect } from 'react'

export const useLocalStorage = <T> (key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key)
  const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : initialValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const removeValue = () => {
    localStorage.removeItem(key)
    setValue(initialValue)
  }

  return {
    value,
    setValue,
    removeValue,
  }
}
