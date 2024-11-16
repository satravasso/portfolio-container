import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --animation-time: .3s;0
}
*{
  font-family: 'Montserrat', sans-serif;
}
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;

  background: ${({ theme }) => theme.colors.bodyColor};
  }

  #root{
    padding: 3rem;
  }
`;
export default GlobalStyles;
