import React from "react"
import { Outlet } from "react-router-dom"

import { Header } from "@components"
import LayoutProps from "./interfaces"
import styles from "./styles.module.scss"

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
