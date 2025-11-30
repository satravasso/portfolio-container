export type ThemeName = "pink" | "green" | "blue"

export interface useThemeState {
  themeName: ThemeName
  toggleTheme: (themeName: ThemeName) => void
}
