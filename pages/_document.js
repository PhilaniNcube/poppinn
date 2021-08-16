import Document from 'next/document';
import Head from 'next/head';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <Fragment>
            <Head>
              <link
                rel="preload"
                href="/fonts/Montserrat-Thin.ttf"
                as="font"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Montserrat-Regular.ttf"
                as="font"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Montserrat-Bold.ttf"
                as="font"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Montserrat-Black.ttf"
                as="font"
                crossOrigin=""
              />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
