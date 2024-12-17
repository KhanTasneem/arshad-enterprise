import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/navigation/Header";
import { CssBaseline } from "@mui/material";
import { SubHeader } from "./components/navigation/Subheader";
import "./App.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3AAFA9',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    /* secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    }, */
  },
});
const App=()=> {

  return (
    <>
    
    <ThemeProvider theme={theme}>

    <CssBaseline/>
    <BrowserRouter>
    <Header/>
    <SubHeader/>
    <Routes>
    <Route index element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
