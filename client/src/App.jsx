import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme } from "./theme";
import AppRouter from "./AppRouter";

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
