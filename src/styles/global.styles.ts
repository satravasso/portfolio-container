import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  font-family: 'Montserrat', sans-serif;
}
  body {
  margin: 0;
  padding: 0;

  background: ${({ theme }) => theme.colors.bodyColor};
  }

  #root{
    padding: 2rem;
  }
`;
export default GlobalStyles;
