import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme } from "./theme";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer"; // ✅ Import Footer globally

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* Ensures content fills the screen while keeping the footer at the bottom */}
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          minHeight: "100vh" 
        }}
      >
        {/* Main Content */}
        <Box sx={{ flex: "1" }}>
          <AppRouter />
        </Box>

        {/* Global Footer - Visible on all pages */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;