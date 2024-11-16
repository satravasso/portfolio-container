import Header from "@components/Header"
import * as S from "./styles"
import React from "react"
import LayoutProps from "./interfaces"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutContainer>
      <Header />
      {children}
    </S.LayoutContainer>
  )
}

export default Layout
