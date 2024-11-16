import { ThemeProvider } from "styled-components"
import MainPage from "./pages/MainPage"
import GlobalStyles from "./styles/global.styles"

import "./utils/i18n"
import useThemeStore from "store/useThemeStore"
import Layout from "@components/Layout"

function App() {
  const { theme } = useThemeStore()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <MainPage />
      </Layout>
    </ThemeProvider>
  )
}

export default App
