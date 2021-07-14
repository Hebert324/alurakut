import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles, AlurakutMenu } from '../src/lib/AlurakutCommons'
import light from '../src/themes/light'
import dark from '../src/themes/dark' 
import React, { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${props => props.theme.colors.background};
    transition: .3s;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${ AlurakutStyles }
`

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const githubUser = "hebert324"

  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AlurakutMenu toggleTheme={ toggleTheme} githubUser={githubUser}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
