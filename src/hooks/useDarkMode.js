import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'light' ? 'dark' : 'light'
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme], colorTheme) // eslint-disable-line react-hooks/exhaustive-deps
    return [colorTheme, setTheme]
}

export default useDarkMode