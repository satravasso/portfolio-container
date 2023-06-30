import Card from '../components/Card';
import ColorButton from '../components/ColorButton/ColorButton';
import { MainPageProps } from './interfaces';
import * as S from './styles';

const MainPage = ({ setSelectedTheme }: MainPageProps) => {
  return (
    <S.MainPageContent>
      <S.CardContainer>
        <Card />
        <Card />
      </S.CardContainer>
      <S.TextContainer>
        <S.Title>This website is build as micro-frontend architecture with module federation</S.Title>
        <S.Description>Why using micro-frontend? </S.Description>
      </S.TextContainer>
    </S.MainPageContent>
  );
};

export default MainPage;
