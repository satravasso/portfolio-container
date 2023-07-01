import { CardProps } from './interfaces';
import * as S from './styles';

const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <S.CardContainer>
      <div style={{ padding: '1rem' }}>{children}</div>
    </S.CardContainer>
  );
};

export default Card;
