import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import useSound from "use-sound"

const ThemeChanger = ({ indicator }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setDarkMode] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true)
    document.documentElement.className === "light"
      ? setDarkMode(true)
      : setDarkMode(false)
  }, [])

  const capitalize = (s) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const [play] = useSound("/sounds/switch-on.mp3")

  const switchTheme = () => {
    if (mounted) {
      play()
      setTheme(theme === "light" ? "dark" : "light")
      theme === "light" ? setDarkMode(false) : setDarkMode(true)
    }
  }

  return (
    <span tw="inline-block">
      <DarkModeSwitch
        moonColor="#1f2937"
        sunColor="#e5e7eb"
        checked={isDarkMode}
        onChange={switchTheme}
        size={30}
        aria-label="Change color theme"
      />
    </span>
  )
}

export default ThemeChanger
