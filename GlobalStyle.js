import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat-Light.ttf");
  font-style: light;
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat-Bold.ttf");
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("/fonts/Montserrat-Black.ttf");
  font-style: black;
  font-weight: 900;
  font-display: swap;
}

  :root {
      --light-font: 300;
      --regular-font: 400;
      --medium-font: 700;
      --bold-font:900; 
      --title : clamp(3.5rem, 2.1304rem + 3.8043vw, 7rem);
      --section-title :clamp(2.5rem, 2.0408rem + 2.4490vw, 4rem);
      --medium-title: clamp(2.5rem, 1.7408rem + 2.09vw, 3.5rem);
      --small-title: clamp(2.2rem, 1.3408rem + 1.89vw, 3rem);
      --sub-heading: clamp(1.5rem, 1.3776rem + 0.6531vw, 1.9rem);
      --red: #e82228;
      --black: #070707;
      --blue: #1098F7;
      --light: #F0F4EF;
      --yellow: #F8F272;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
     
  }

  body {
      line-height: 1.6;
      color: var(--black);
       font-family: "Montserrat";
  }

  p {
      font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
      line-height: 1.1;
      
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  ul, ol, li {
      list-style-type: none;
      font-size: 1.6rem;
  }

  .container {
      width: 90%;
      max-width: 1280px;
      min-width: 280px;
      margin: 0 auto;
  }

  .title {
      font-size: var(--title);
  }

  .section-title {
      font-size: var(--section-title);
      font-weight: var(--light-font);
        
  }

  .sub-heading {
      font-size: var(--sub-heading);
      font-weight: var(--light-font);
       
  }
`;

export default GlobalStyle;
