import { ThemeProps } from '@styles/Theme/interfaces';
import React from 'react';

export interface SettingsButtonProps {
  setSelectedTheme: React.Dispatch<React.SetStateAction<ThemeProps>>;
  selectedTheme: ThemeProps;
}

export interface ColorOptionProps {
  $color: string;
}
