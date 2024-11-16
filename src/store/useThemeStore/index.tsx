import { pink } from "@styles/Theme/themes.styled"
import { useThemeState } from "./interface"
import { create } from "zustand"

const useThemeStore = create<useThemeState>((set) => ({
  theme: pink,
  toggleTheme: (theme) => set(() => ({ theme })),
}))

export default useThemeStore
