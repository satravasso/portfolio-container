import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';
import { Logo } from './logo';
import { SettingsButtonProps } from './interfaces';
import { pink, green, blue } from '../../styles/Theme/themes.styled';
import Dropdown from '../Dropdown';

function SettingsButton(props: SettingsButtonProps) {
  const [openDropdown, setOpenDropdown] = useState(true);
  const { setSelectedTheme } = props;
  const { t, i18n } = useTranslation();

  return (
    <S.DropdownWrapper>
      <S.ColorButtonContent onClick={() => setOpenDropdown(!openDropdown)}>
        <S.Title>Preferences</S.Title>
      </S.ColorButtonContent>
      <Dropdown setOpen={setOpenDropdown} open={openDropdown}>
        <S.ColorThemeTitles>Language</S.ColorThemeTitles>
        <S.LanguageContainer>
          <S.LanguageOption onClick={() => i18n.changeLanguage('en')}>En</S.LanguageOption>
          <S.LanguageOption onClick={() => i18n.changeLanguage('pt')}>Pt</S.LanguageOption>
          <S.LanguageOption onClick={() => i18n.changeLanguage('fr')}>Fr</S.LanguageOption>
        </S.LanguageContainer>
        <S.ColorThemeTitles>Wich is your favorite color?</S.ColorThemeTitles>
        <S.ColorContainer>
          <S.ColorOption $color="#F7C8E0" onClick={() => setSelectedTheme(pink)} />
          <S.ColorOption $color="#CDF0EA" onClick={() => setSelectedTheme(green)} />
          <S.ColorOption $color="#C0DEFF" onClick={() => setSelectedTheme(blue)} />
        </S.ColorContainer>
      </Dropdown>
    </S.DropdownWrapper>
  );
}

export default SettingsButton;
