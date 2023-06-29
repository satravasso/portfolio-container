import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
:root {
  --animation-time: .3s;
}
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;

    background-image: linear-gradient(#275c91, #65b4ce, #ee96bc);

  }
`
export default GlobalStyles
