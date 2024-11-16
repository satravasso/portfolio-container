
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import GlobalStyles from './styles/global.styles';

import './utils/i18n';
import Header from '@components/Header';
import useThemeStore from 'store/useThemeStore';
import { useEffect } from 'react';

function App() {
  const {theme} = useThemeStore()

  useEffect(() => {
console.log(theme)
  },[theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        <Header />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
