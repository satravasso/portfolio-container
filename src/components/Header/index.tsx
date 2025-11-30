import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Button, HamburgerIcon, Logo, MobileMenu } from "@components"
import styles from "./styles.module.scss"

function Header() {
  const { t, i18n } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const openMobileMenu = () => setIsMobileMenuOpen(true)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <header className={styles.headerContainer}>
      <Link to={`/`}>
        <div className={styles.logoContainer}>
          <Logo color='#1E212D' />
        </div>
      </Link>

      <nav className={styles.desktopNav}>
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
      </nav>

      <HamburgerIcon
        isOpen={isMobileMenuOpen}
        onClick={toggleMobileMenu}
        className={styles.hamburgerIcon}
        ariaLabel={t("menu") || "Menu"}
      />

      <div className={styles.desktopPreferences}>
        <Button />
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu}>
        <nav className={styles.mobileNav} id='mobile-menu-title'>
          <Link to={`/about-me`} className='btn-header' onClick={closeMobileMenu}>
            <span>{t("about_me")}</span>
          </Link>
          <Link to={`/git`} className='btn-header' onClick={closeMobileMenu}>
            <span>{t("git")}</span>
          </Link>
          <a
            className='btn-header'
            onClick={() => {
              i18n.changeLanguage("pt")
              closeMobileMenu()
            }}
          >
            <span>{t("contact")}</span>
          </a>
          <div className={styles.mobilePreferences}>
            <Button />
          </div>
        </nav>
      </MobileMenu>
    </header>
  )
}

export default Header
