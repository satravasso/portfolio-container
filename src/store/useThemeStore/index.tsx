import { useThemeState, ThemeName } from "./interface"
import { create } from "zustand"

const applyTheme = (themeName: ThemeName) => {
  document.documentElement.setAttribute('data-theme', themeName)
}

const useThemeStore = create<useThemeState>((set) => ({
  themeName: 'pink',
  toggleTheme: (themeName: ThemeName) => {
    applyTheme(themeName)
    set(() => ({ themeName }))
  },
}))

applyTheme('pink')

export default useThemeStore
