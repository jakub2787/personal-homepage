import Buttton from "./features/personalHomepage/ThemeSwitch/Index";
import Container from "./features/personalHomepage/Container";
import Section from "./features/personalHomepage/Section";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { selectIsDarkTheme } from "./features/personalHomepage/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import SectionHeader from "./features/personalHomepage/SectionHeader";

function App() {
  const isDarkMode = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Buttton />
        <SectionHeader />
        <Section />
      </Container>
    </ThemeProvider>
  )
};

export default App;
