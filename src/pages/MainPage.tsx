import { LogoGit } from "@components/Logos/LogoGit"
import Card from "../components/Card"
import { LogoLinkedin } from "@components/Logos/LogoLinkedin"
import { LogoMail } from "@components/Logos/LogoMail"
import styles from "./styles.module.scss"

function MainPage() {
  return (
    <section className={styles.mainPageContent}>
      <div className={styles.cardContainer}>
        <div className={styles.cardColumn}>
          <Card backgroundColor='#FFFF'>
            <h3 className={styles.titleCard}>A little bit of me</h3>
            My name is Sabrina, and I&apos;ve been working as a programmer since 2017. I began my career as a back-end
            developer specializing in Java, but I soon discovered my passion for front-end development. Since making the
            switch, I&apos;ve been dedicated to creating engaging and intuitive user interfaces. You can explore my full
            journey here
          </Card>
          <Card backgroundColor='#FFFF'>
            <div className={styles.cardContent}>
              works & repositories
              <LogoGit />
            </div>
          </Card>
        </div>
        <div className={styles.cardColumn} style={{ marginTop: "2rem" }}>
          <Card backgroundColor='#FFFF'>
            <div className={styles.cardContent}>
              ways to follow me on social media or get in touch with me
              <div className={styles.inAndEmailContainer}>
                <LogoLinkedin />
                <LogoMail />
              </div>
            </div>
          </Card>
          <Card backgroundColor='#FFFF'>
            <h3 className={styles.titleCard}>What about this site?</h3>
            As you can see this site is build as micro-fronend and is very robust for the proposition, but is how I
            found to show almost everything that I learned in my career
          </Card>
          <Card backgroundColor='#FFFF'>
            <h3 className={styles.titleCard}>What I Excel At</h3>
            React, webpack, module federation, styled component, eslint, i18n
          </Card>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Building Buzz-Worthy Front-End Experiences: Where React Meets Cozy Vibes</h2>
        <span className={styles.description}>
          When I&apos;m not taming JavaScript or styling components, you&apos;ll find me buzzing around my favorite
          things: Bees 🐝 (they&apos;re nature&apos;s overachievers, and I relate!). Stardew Valley 🎮 (because life
          needs more cozy farming vibes). Anything that brings warmth and a touch of calm to life. Explore my projects
          to see how I transform ideas into interactive, user-friendly experiences. Whether it&apos;s developing
          seamless APIs, responsive designs, or scaling front-end systems, I&apos;m all about creating code that&apos;s
          as clean and cozy as a cup of hot tea. Let&apos;s make something amazing together! 💛{" "}
        </span>
      </div>
    </section>
  )
}

export default MainPage
