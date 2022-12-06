import { pink, yellow } from '../../styles/Theme/themes.styled';
import { HeaderProps } from './interfaces';
import { Logo } from './logo';
import { HeaderContent, HeaderContentainer } from './styles';

import { useTranslation } from 'react-i18next';

const Header = ({ setSelectedTheme }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <HeaderContentainer>
      <div style={{ display: 'flex' }}>
        <Logo />
        <HeaderContent>
          <div>
            <a className="btn-header" onClick={() => setSelectedTheme(yellow)}>
              <span>{t('home')}</span>
            </a>
          </div>
          <div>
            <a className="btn-header" onClick={() => setSelectedTheme(pink)}>
              <span>{t('about_me')}</span>
            </a>
          </div>
          <div>
            <a className="btn-header" onClick={() => i18n.changeLanguage('pt')}>
              <span>{t('contact')}</span>
            </a>
          </div>
          <div>
            <a className="btn-header" onClick={() => i18n.changeLanguage('en')}>
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <a className="btn-header">
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a className="float">
              <span>Linkedin</span>
            </a>
          </div>
        </HeaderContent>
        <div></div>
      </div>
    </HeaderContentainer>
  );
};

export default Header;
