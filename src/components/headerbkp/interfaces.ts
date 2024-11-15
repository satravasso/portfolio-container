import { ThemeProps } from '@styles/Theme/interfaces';
import React from 'react';

export interface HeaderProps {
  setSelectedTheme: React.Dispatch<React.SetStateAction<ThemeProps>>;
}
