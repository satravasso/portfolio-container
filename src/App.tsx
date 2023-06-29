import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/global.styles';
import { ThemeProps } from './styles/Theme/interfaces';
import { pink } from './styles/Theme/themes.styled';
import './utils/i18n';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>(pink);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Header setSelectedTheme={setSelectedTheme} />
      <MainPage setSelectedTheme={setSelectedTheme} />
    </ThemeProvider>
  );
};

export default App;
