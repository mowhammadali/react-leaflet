import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Styles/Global/GlobalStyles';
import { lightMode , darkMode } from '../Styles/Theme/Theme';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {

    const [mode , setMode] = useState(
        localStorage.getItem('theme') || 'light'
    )

    const handleMode = () => {
        if(mode === 'light'){
            setMode('dark');
        }
        else{
            setMode('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('theme' , mode);
    } , [mode])

    return (
        <ThemeContext.Provider value={{mode , handleMode}}>
            <ThemeProvider theme={mode === 'light' ? lightMode : darkMode}>
                <GlobalStyles mode={mode}/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;