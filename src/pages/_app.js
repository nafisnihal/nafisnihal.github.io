import withDarkMode, { useDarkMode } from "next-dark-mode";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import { darkTheme, lightTheme } from "../themes/default";

function App({ Component, pageProps }) {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{ darkMode: darkModeActive, ...theme }}>
        <GlobalStyles />
        <Head>
          <title>Nafis Nihal</title>
          <meta
            name="description"
            content="Nafis Nihal is a frontend developer based in Dhaka who loves to build things for the web."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default withDarkMode(App);
