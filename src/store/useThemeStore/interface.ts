import { ThemeProps } from "@styles/Theme/interfaces";

export interface useThemeState {
    theme: ThemeProps,
    // eslint-disable-next-line no-unused-vars
    toggleTheme: (theme: ThemeProps) => void
}

