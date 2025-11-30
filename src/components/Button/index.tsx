import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Dropdown } from "@components"
import { useThemeStore, ThemeName } from "@store"
import styles from "./styles.module.scss"

const themeColors: Record<ThemeName, string> = {
  pink: "#FFDEDE",
  green: "#CDF0EA",
  blue: "#afd3fa",
}

function Button() {
  const [openDropdown, setOpenDropdown] = useState(false)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const { i18n } = useTranslation()

  return (
    <div className={styles.dropdownWrapper}>
      <button className={styles.colorButtonContent} onClick={() => setOpenDropdown(!openDropdown)}>
        <div className={styles.title}>Preferences</div>
      </button>
      <Dropdown setOpen={setOpenDropdown} open={openDropdown}>
        <div className={styles.colorThemeTitles}>Language</div>
        <div className={styles.languageContainer}>
          <div className={styles.languageOption} onClick={() => i18n.changeLanguage("en")}>
            En
          </div>
          <div className={styles.languageOption} onClick={() => i18n.changeLanguage("pt")}>
            Pt
          </div>
        </div>
        <div className={styles.colorThemeTitles}>Wich is your favorite color?</div>
        <div className={styles.colorContainer}>
          {(Object.keys(themeColors) as ThemeName[]).map((themeName) => (
            <div
              key={themeName}
              className={styles.colorOption}
              style={{ background: themeColors[themeName] }}
              onClick={() => toggleTheme(themeName)}
            />
          ))}
        </div>
      </Dropdown>
    </div>
  )
}

export default Button
