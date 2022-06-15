import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
const GlobalStyle = createGlobalStyle`
  html{
   
  }
  
  body,h1,h2,h3,p,a,input,button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
   
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
