import Header from "@components/Header"
import * as S from "./styles"
import React from "react"
import LayoutProps from "./interfaces"
import { Outlet } from "react-router-dom"

const Layout: React.FC<LayoutProps> = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}

export default Layout
