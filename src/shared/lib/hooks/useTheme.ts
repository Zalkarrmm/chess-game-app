import { useContext } from 'react'

import { Theme } from 'shared/const/theme'
import { ThemeContext } from 'shared/lib/context/ThemeContext'

interface UseThemeResult {
  toggleTheme: (theme: Theme) => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = (theme: Theme) => {
    setTheme?.(theme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  }
}
