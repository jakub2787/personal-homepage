import Container from "../../common/Container";
import Section from "../../common/Section";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { selectIsDarkTheme } from "../../features/personalHomepage/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import SectionHeader from "../../features/personalHomepage/SectionHeader";
import Footer from "../../features/personalHomepage/Footer";
import Portfolio from "../../features/personalHomepage/Portfolio";

function App() {
  const isDarkMode = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <SectionHeader />
        <Section />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  )
};

export default App;
