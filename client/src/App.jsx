import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, createTheme } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme(mode === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "100vh" 
        }}
      >
        <Box sx={{ flex: "1" }}>
          <AppRouter toggleTheme={toggleTheme} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;