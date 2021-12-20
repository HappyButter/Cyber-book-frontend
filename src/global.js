import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
	  overflow-y: auto;
	  overflow-x: hidden;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    scroll-behavior: smooth;
    
    color: rgba(255,255,255,0.75);
    font-family: Lato, sans-serif;

  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }


  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(100,100,100,0.4); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0);
    box-shadow: inset 0 0 6px rgba(2, 216, 243, 0.75); 
  }
`