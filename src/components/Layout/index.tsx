import Header from "@components/Header"
import React from "react"
import LayoutProps from "./interfaces"
import { Outlet } from "react-router-dom"
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
