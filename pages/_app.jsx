import GlobalStyles from "/GlobalStyles.jsx"
import { ThemeProvider } from "next-themes"

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem={true}
      enableColorScheme={true}
      themes={["light", "dark"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
