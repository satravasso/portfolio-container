import { useTranslation } from "react-i18next"
import { Logo } from "./logo"
import * as S from "./styles"
import Button from "@components/Button"
import useThemeStore from "store/useThemeStore"
import { Link } from "react-router-dom"
function Header() {
  const { t, i18n } = useTranslation()
  const { theme } = useThemeStore()
  return (
    <S.HeaderContentainer>
      <div style={{ display: "flex", justifyContent: "flex-start", padding: "1rem" }}>
        {/* <div style={{ backgroundColor: "#BA7575", borderRadius: "5rem", padding: ".5rem" }}> */}
        <Logo color={theme.colors.iconColor} />
      </div>
      {/* </div> */}
      <S.HeaderLine />
      <S.HeaderContent>
        <Link to={`/about-me`} className="btn-header">
          <span>{t("about_me")}</span>
        </Link>
        <Link to={`/git`} className="btn-header">
          <span>{t("git")}</span>
        </Link>

        <div>
          <a className="btn-header" onClick={() => i18n.changeLanguage("pt")}>
            <span>{t("contact")}</span>
          </a>
        </div>
      </S.HeaderContent>
      <S.HeaderLine />
      <Button />
    </S.HeaderContentainer>
  )
}

export default Header
