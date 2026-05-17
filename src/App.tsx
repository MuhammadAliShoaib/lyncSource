import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import theme from "./utils/theme";

const themeMode = createTheme(theme());

function App() {
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
