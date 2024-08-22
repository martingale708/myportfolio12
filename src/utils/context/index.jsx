import React, { useState, useEffect, createContext } from 'react'
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) =>
          props.theme.darkMode ? '#3a3a3a' : '#deded8'};
        color: ${(props) => (props.theme.darkMode ? 'white' : 'black')}; 
    }
    a {
      color: ${(props) => (props.theme.darkMode ? 'white' : 'black')}; 
    }
    .grid__project__card-front-title {
      color: ${(props) => (props.theme.darkMode ? '#FFFFFF' : '#FFFFFF')};
    }
    .grid__project__card-back {
      background-color: ${(props) =>
        props.theme.darkMode ? '#595959' : '#FFFFFF'};
    }
`

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Récupérer la valeur du thème à partir du localStorage ou utiliser un thème par défaut.
    return JSON.parse(localStorage.getItem('darkMode')) || false
  })

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode
      // Sauvegarder le thème dans le localStorage.
      localStorage.setItem('darkMode', JSON.stringify(newMode))
      return newMode
    })
  }

  useEffect(() => {
    // Appliquer le thème persistant au chargement de la page.
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={{ darkMode }}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
