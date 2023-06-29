import { pink, yellow } from '../../styles/Theme/themes.styled';
import { HeaderProps } from './interfaces';
import { Logo } from './logo';
import { HeaderContent, HeaderContentainer } from './styles';

import { useTranslation } from 'react-i18next';

const SimpleHeader = ({ setSelectedTheme }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <HeaderContentainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo />
        <HeaderContent>
          <div>
            <a className="btn-header" onClick={() => setSelectedTheme(yellow)}>
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
        </HeaderContent>
        <div></div>
      </div>
    </HeaderContentainer>
  );
};

export default SimpleHeader;
