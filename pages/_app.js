import { Fragment } from 'react';
import Navbar from '../components/Navbar';
import GlobalStyle from '../GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}
