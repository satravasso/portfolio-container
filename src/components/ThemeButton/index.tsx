import { useState } from 'react';
import * as S from './styles';
import { Logo } from './logo';
import { PalletColorProps } from './interfaces';
import { pink, yellow } from '../../styles/Theme/themes.styled';

const ThemeButton = () => {
  const [active, setActive] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <S.ColorButtonContent>
      <S.Typography>Theme</S.Typography>
    </S.ColorButtonContent>
  );
};

export default ThemeButton;
