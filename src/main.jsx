import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme} from "@mui/material/styles";
import { createRoot } from 'react-dom/client'
import CssBaseline from "@mui/material/CssBaseline";
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Footer from "./Footer.jsx"
import Journey from './Journey.jsx'
import FutureAI from './FutureAI.jsx'
import Impact from "./Impact.jsx"

const theme = createTheme({
  palette: {
    mode: "light",
    
    primary: {
      main: "#2C3E50", 
      light: "#4A6572", 
    },
    
    secondary: { 
      main: "#FFC107", 
    },
    
    background: {
      default: "#F5F7FA", 
      paper: "#FFFFFF",   
    },
    
    text: {
      primary: "#2D3748", 
      secondary: "#718096", 
    },
  },

  // 5. COMPONENTS: Ensure the body background matches the theme
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         minHeight: "100vh",
  //         margin: 0,
  //         // Use the palette background color here for consistency
  //         backgroundColor: "#F5F7FA", 
  //         backgroundAttachment: "fixed",
  //         backgroundSize: "cover",
  //       }
  //     }
  //   }
  // }
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We need BrowserRouter because it listens for changes in the url and allows for navigation of the page without reloading the entire thing 
        Routes is responsible for choosing which page to show based on the link that this clicked -> Only one Route in Routes is rendered 
        Route just tells us if /journey is clicked then navigate to the Journey component 
        Link asks the Router to take it the correct place, ie something like router.navigate("/journey")
        Router only exists if BrowserRouter is created
        */}
    <BrowserRouter>
    <ThemeProvider theme = {theme}>
      <CssBaseline>
      <Navbar/>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path = "/journey" element = {<Journey/>}/>
        <Route path = "/impact" element = {<Impact/>}/>
        <Route path = "future-ai" element = {<FutureAI/>}/>
      </Routes>
      <Footer/>
      </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
