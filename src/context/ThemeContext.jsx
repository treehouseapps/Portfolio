import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";

const ColorModeContext = createContext({ mode: "light", toggle: () => { } });
export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeProvider({ children }) {
    const getInitialMode = () =>
        localStorage.getItem("color-mode") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const [mode, setMode] = useState(getInitialMode);

    useEffect(() => {
        localStorage.setItem("color-mode", mode);
        document.documentElement.setAttribute("data-color-scheme", mode);
    }, [mode]);

    const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
    const value = useMemo(
        () => ({ mode, toggle: () => setMode((m) => (m === "light" ? "dark" : "light")) }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={value}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    );
}