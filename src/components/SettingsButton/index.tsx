import { useState } from 'react';
import * as S from './styles';
import { Logo } from './logo';
import { PalletColorProps } from './interfaces';
import { pink, yellow } from '../../styles/Theme/themes.styled';

const SettingsButton = () => {
  const [active, setActive] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <S.ColorButtonContent>
      <S.Typography>Settings</S.Typography>
    </S.ColorButtonContent>
  );
};

export default SettingsButton;
