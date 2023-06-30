import { pink, yellow } from '../../styles/Theme/themes.styled';
import SettingsButton from '../SettingsButton';
import { HeaderProps } from './interfaces';
import { Logo } from './logo';
import * as S from './styles';

import { useTranslation } from 'react-i18next';

const Header = ({ setSelectedTheme, selectedTheme }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <S.HeaderContentainer>
      <S.HeaderItems>
        <Logo />
        <S.HeaderLine />
        <S.HeaderContent>
          <div>
            <a className="btn-header" onClick={() => setSelectedTheme(selectedTheme === pink ? yellow : pink)}>
              <span>{t('home')}</span>
            </a>
          </div>
          <div>
            <a className="btn-header" onClick={() => i18n.changeLanguage('en')}>
              <span>{t('about_me')}</span>
            </a>
          </div>
          <div>
            <a className="btn-header" onClick={() => i18n.changeLanguage('pt')}>
              <span>{t('contact')}</span>
            </a>
          </div>
        </S.HeaderContent>
        <S.HeaderLine />
        <SettingsButton />
      </S.HeaderItems>
    </S.HeaderContentainer>
  );
};

export default Header;
