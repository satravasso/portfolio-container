import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
:root {
  --animation-time: .3s;
}
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #ffdede7a;
    /* background-color: #FFDEDE; */
    overflow: hidden;
  }
`
export default GlobalStyles
