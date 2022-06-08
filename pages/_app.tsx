import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html{
    background-image: url('background.png');
background-repeat: no-repeat;
background-position: right;

  }
  
  body {
    background: linear-gradient(to right, #FFEBD6 0, #FFEBD6  63%, #423B32 42%);
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
    
   
  }
  
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
