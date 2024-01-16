import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Blog from "./pages/Blog";
import Router from "./Router";
import { GlobalStyles } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";
import { ProfileDataContextProvider } from "./contexts/ProfileDataContext";

function App() {
  return (
    <BrowserRouter>
      <ProfileDataContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </ProfileDataContextProvider>
    </BrowserRouter>
  );
}

export default App;
