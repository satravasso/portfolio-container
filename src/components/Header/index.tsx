import { useTranslation } from 'react-i18next';
import { Logo } from './logo';
import * as S from './styles';
import Button from '@components/Button';
import useThemeStore from 'store/useThemeStore';

function Header() {
  const { t, i18n } = useTranslation();
  const {theme} = useThemeStore()
  return (
    <S.HeaderContentainer>
      <S.HeaderItems>
        <Logo color={theme.colors.iconColor} />
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
        <Button />
      </S.HeaderItems>
    </S.HeaderContentainer>
  );
}

export default Header;
