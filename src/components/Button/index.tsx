import { useState } from "react"
import { useTranslation } from "react-i18next"
import * as S from "./styles"

import { colorsTheme } from "../../styles/Theme"
import Dropdown from "../Dropdown"
import useThemeStore from "store/useThemeStore"

function Button() {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { toggleTheme } = useThemeStore()
  const { i18n } = useTranslation()

  return (
    <S.DropdownWrapper>
      <S.ColorButtonContent onClick={() => setOpenDropdown(!openDropdown)}>
        <S.Title>Preferences</S.Title>
      </S.ColorButtonContent>
      <Dropdown setOpen={setOpenDropdown} open={openDropdown}>
        <S.ColorThemeTitles>Language</S.ColorThemeTitles>
        <S.LanguageContainer>
          <S.LanguageOption onClick={() => i18n.changeLanguage("en")}>En</S.LanguageOption>
          <S.LanguageOption onClick={() => i18n.changeLanguage("pt")}>Pt</S.LanguageOption>
        </S.LanguageContainer>
        <S.ColorThemeTitles>Wich is your favorite color?</S.ColorThemeTitles>
        <S.ColorContainer>
          {colorsTheme.map((theme) => (
            <S.ColorOption key="color" $color={theme.colors.primary} onClick={() => toggleTheme(theme)} />
          ))}
        </S.ColorContainer>
      </Dropdown>
    </S.DropdownWrapper>
  )
}

export default Button
