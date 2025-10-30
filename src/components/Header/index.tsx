import { useTranslation } from "react-i18next"
import { Logo } from "../Logos/MainLogo"
import Button from "@components/Button"
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

function Header() {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles.headerContainer}>
      <Link to={`/`}>
        <div className={styles.logoContainer}>
          <Logo color='#1E212D' />
        </div>
      </Link>
      <div className={styles.headerLine} />
      <div className={styles.headerContent}>
        <Link to={`/about-me`} className='btn-header'>
          <span>{t("about_me")}</span>
        </Link>
        <Link to={`/git`} className='btn-header'>
          <span>{t("git")}</span>
        </Link>

        <div>
          <a className='btn-header' onClick={() => i18n.changeLanguage("pt")}>
            <span>{t("contact")}</span>
          </a>
        </div>
      </div>
      <div className={styles.headerLine} />
      <Button />
    </div>
  )
}

export default Header
