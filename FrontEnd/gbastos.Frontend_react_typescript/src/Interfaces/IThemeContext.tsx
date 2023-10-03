export interface IThemeContext{
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export interface IThemeContextProvider{
    children: React.ReactNode;
}