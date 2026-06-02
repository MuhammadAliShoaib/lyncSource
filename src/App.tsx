import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import theme from "./utils/theme";
import AppBar from "./components/AppBar";

const themeMode = createTheme(theme());

function App() {
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          <AppBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
