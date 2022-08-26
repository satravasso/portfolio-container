import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/global.styles';


const App = () => {
  const theme = {
    main: "mediumseagreen"
  };
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <MainPage />
  </ThemeProvider>
  );
};

export default App;
