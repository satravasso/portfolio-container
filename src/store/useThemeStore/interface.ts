export type ThemeName = "pink" | "green" | "blue"

export interface useThemeState {
  themeName: ThemeName
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (themeName: ThemeName) => void
}
