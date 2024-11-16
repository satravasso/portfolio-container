import Card from '../components/Card';
import * as S from './styles';

function MainPage() {
  return (
    <S.MainPageContent>
      <S.CardContainer>
        <S.CardColumn>
          {/* <Card backgroundColor="#FFDEDE"> */}
          <Card backgroundColor="#FFFF">
            <S.TitleCard>A little bit of me</S.TitleCard>
            My name is Sabrina, I`m working as a programmer since 2017. I started working as back-end developer using
            Java and then I have the opportunity to switch my career to front-end and I sill into until now. You can see
            my full tragetory here
          </Card>
          <Card backgroundColor="#FFFF">works & repositories</Card>
        </S.CardColumn>
        <S.CardColumn style={{ marginTop: '2rem' }}>
          <Card backgroundColor="#FFFF"> Ways that you can fallow me on social medias or contact me </Card>
          <Card backgroundColor="#FFFF">
            <S.TitleCard>What about this site?</S.TitleCard>
            As you can see this site is build as micro-fronend and is very robust for the proposition, but is how I
            found to show almost everything that I learned in my career
          </Card>
          <Card backgroundColor="#FFDEDE">
            <S.TitleCard>Technologies used</S.TitleCard>
            React, webpack, module federation, styled component, eslint, i18n
          </Card>
        </S.CardColumn>
      </S.CardContainer>
      <S.TextContainer>
        <S.Title>This website is build with micro-frontend architecture using module federation</S.Title>
        <S.Description>Why using micro-frontend? </S.Description>
      </S.TextContainer>
    </S.MainPageContent>
  );
}

export default MainPage;
