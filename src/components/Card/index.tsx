import { CardProps } from './interfaces';
import * as S from './styles';

const Card = (props: CardProps) => {
  const { children, backgroundColor } = props;

  return (
    <S.CardContainer style={{ backgroundColor: backgroundColor }}>
      <div style={{ padding: '1rem' }}>{children}</div>
    </S.CardContainer>
  );
};

export default Card;
