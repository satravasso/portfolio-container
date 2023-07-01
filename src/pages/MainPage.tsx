import Card from '../components/Card';
import { MainPageProps } from './interfaces';
import * as S from './styles';

const MainPage = ({ setSelectedTheme }: MainPageProps) => {
  return (
    <S.MainPageContent>
      <S.CardContainer>
        <S.CardColumn>
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card>
          <Card>
            Here you can see my timeline progression of my career. You can also export my curriculun as pdf or doc
          </Card>
        </S.CardColumn>
        <S.CardColumn style={{ marginTop: '2rem' }}>
          <Card> Ways that you can fallow me on social medias or contact me </Card>
          <Card>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card>
        </S.CardColumn>
      </S.CardContainer>
      <S.TextContainer>
        <S.Title>This website is build with micro-frontend architecture using module federation</S.Title>
        <S.Description>Why using micro-frontend? </S.Description>
      </S.TextContainer>
    </S.MainPageContent>
  );
};

export default MainPage;
