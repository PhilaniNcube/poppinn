import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  :root {
      --light-font: 300;
      --regular-font: 400;
      --medium-font: 700;
      --bold-font:900; 
      --title : clamp(3.5rem, 2.8878rem + 3.2653vw, 5.5rem);
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

  html {
      font-size: 62.5%;
  }

  body {
      line-height: 1.6;
      font-weight: var(--regular-font);
      font-family: 'Montserrat', sans-serif;
      color: var(--black);
  }

  p {
      font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
      line-height: 1.1;
      font-family: 'Montserrat', sans-serif;
  }

  h1 {
      font-weight: var(--bold-font);
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
        font-family: 'Montserrat', sans-serif;
  }

  .sub-heading {
      font-size: var(--sub-heading);
      font-weight: var(--light-font);
       font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
