import { LogoGit } from "@components/Logos/LogoGit"
import Card from "../components/Card"
import * as S from "./styles"
import { LogoLinkedin } from "@components/Logos/LogoLinkedin"
import { LogoMail } from "@components/Logos/LogoMail"

function MainPage() {
  return (
    <S.MainPageContent>
      <S.CardContainer>
        <S.CardColumn>
          {/* <Card backgroundColor="#FFDEDE"> */}
          <Card backgroundColor='#FFFF'>
            <S.TitleCard>A little bit of me</S.TitleCard>
            My name is Sabrina, and I've been working as a programmer since 2017. I began my career as a back-end
            developer specializing in Java, but I soon discovered my passion for front-end development. Since making the
            switch, I've been dedicated to creating engaging and intuitive user interfaces. You can explore my full
            journey here
          </Card>
          <Card backgroundColor='#FFFF'>
            <S.CardContent>
              works & repositories
              <LogoGit />
            </S.CardContent>
          </Card>
        </S.CardColumn>
        <S.CardColumn style={{ marginTop: "2rem" }}>
          <Card backgroundColor='#FFFF'>
            <S.CardContent>
              ways to follow me on social media or get in touch with me
              <S.InAndEmailContainer>
                <LogoLinkedin />
                <LogoMail />
              </S.InAndEmailContainer>
            </S.CardContent>
          </Card>
          <Card backgroundColor='#FFFF'>
            <S.TitleCard>What about this site?</S.TitleCard>
            As you can see this site is build as micro-fronend and is very robust for the proposition, but is how I
            found to show almost everything that I learned in my career
          </Card>
          <Card backgroundColor='#FFFF'>
            <S.TitleCard>What I Excel At</S.TitleCard>
            React, webpack, module federation, styled component, eslint, i18n
          </Card>
        </S.CardColumn>
      </S.CardContainer>
      <S.TextContainer>
        <S.Title>Building Buzz-Worthy Front-End Experiences: Where React Meets Cozy Vibes</S.Title>
        <S.Description>
          When I&apos;m not taming JavaScript or styling components, you’ll find me buzzing around my favorite things:
          Bees 🐝 (they&apos;re nature&apos;s overachievers, and I relate!). Stardew Valley 🎮 (because life needs more
          cozy farming vibes). Anything that brings warmth and a touch of calm to life. Explore my projects to see how I
          transform ideas into interactive, user-friendly experiences. Whether it’s developing seamless APIs, responsive
          designs, or scaling front-end systems, I’m all about creating code that's as clean and cozy as a cup of hot
          tea. Let’s make something amazing together! 💛{" "}
        </S.Description>
      </S.TextContainer>
    </S.MainPageContent>
  )
}

export default MainPage
