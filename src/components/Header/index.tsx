import { useTranslation } from 'react-i18next';
import { HeaderProps } from './interfaces';
import { Logo } from './logo';
import * as S from './styles';
import Button from '@components/Button';

function Header({ setSelectedTheme, selectedTheme }: HeaderProps) {
  const { t, i18n } = useTranslation();

  return (
    <S.HeaderContentainer>
      <S.HeaderItems>
        <Logo color={selectedTheme.colors.iconColor} />
        <S.HeaderLine />
        <S.HeaderContent>
          <div>
            <a className="btn-header" onClick={() => i18n.changeLanguage('en')}>
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
        <Button setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
      </S.HeaderItems>
    </S.HeaderContentainer>
  );
}

export default Header;
