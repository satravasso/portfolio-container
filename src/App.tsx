import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/global.styles';
import { ThemeProps } from './styles/Theme/interfaces';
import { green } from './styles/Theme/themes.styled';
import './utils/i18n';

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeProps>(green);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        <Header setSelectedTheme={setSelectedTheme} selectedTheme={selectedTheme} />
        <MainPage setSelectedTheme={setSelectedTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
