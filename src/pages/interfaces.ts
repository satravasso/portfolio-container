import { ThemeProps } from "@styles/Theme/interfaces";
import React from "react";

export interface MainPageProps {
  setSelectedTheme: React.Dispatch<React.SetStateAction<ThemeProps>>;
}
