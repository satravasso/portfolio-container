import SettingsButton from '../SettingsButton';
import { CardProps } from './interfaces';
import { Logo } from './logo';
import * as S from './styles';

import { useTranslation } from 'react-i18next';

const Card = (props: CardProps) => {
  const { t, i18n } = useTranslation();

  return <S.CardContainer>oi</S.CardContainer>;
};

export default Card;
