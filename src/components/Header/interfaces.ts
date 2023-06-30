import { ThemeProps } from "../../styles/Theme/interfaces";

export interface HeaderProps {
   setSelectedTheme: React.Dispatch<React.SetStateAction<ThemeProps>>
   selectedTheme: ThemeProps
}


