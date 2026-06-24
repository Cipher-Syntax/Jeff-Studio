import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "light";
        const storedTheme = window.localStorage.getItem("theme");
        return storedTheme || "light";
    });


    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.toggle("dark", theme === "dark");
        root.style.colorScheme = theme;

        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};

export const useTheme = () => useContext(ThemeContext)