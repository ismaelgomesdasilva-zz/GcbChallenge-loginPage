import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
const GlobalStyle = createGlobalStyle`
  html{
/*     
    background: linear-gradient(to right, #FFEBD6 0, #FFEBD6  63%, #423B32 42%); */
  }
  
  body {
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
      <ToastContainer />
    </>
  )
}
