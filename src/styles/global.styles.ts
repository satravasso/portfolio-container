import { createGlobalStyle } from "styled-components"
import { query } from "@styles/_mq.styles"

const GlobalStyles = createGlobalStyle`
:root {
  font-family: 'Montserrat', sans-serif;
}
  body {
  margin: 0;
  padding: 0;
  
  
  background: ${({ theme }) => theme.colors.bodyColor};

  @media ${query.xl} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  

  }

  #root{
    padding: 2rem;
    width: 100%;

    @media ${query.xl} {
    max-width: 1920px;
    
  }
  }
`
export default GlobalStyles
