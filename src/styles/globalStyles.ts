import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased; 
    font-size: 1.6rem;
    outline: none;
}

a{
    text-decoration: none;
}

    ul {
        list-style: none;
    }

    button, a {
         cursor: pointer;
         transition: filter 0s;
    }
    
    
    button:hover, a:hover {
     filter: brightness(0.9);
     background: #ffff;

    }

    body, input, button, textarea{
     font-size: 1.6rem;
     outline: none;
    }

    .section{
     overflow-y: auto;
     overflow-x: hidden;
     max-width: 150rem;
     margin: auto;
    }

    .row{
     display: flex;
     flex-wrap: wrap;
     position: relative;
    }
`