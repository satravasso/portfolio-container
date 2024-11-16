import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global.styles"

import "./utils/i18n"
import useThemeStore from "store/useThemeStore"
import { Routers } from "routers/Routers"

function App() {
  const { theme } = useThemeStore()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routers />
    </ThemeProvider>
  )
}

export default App
