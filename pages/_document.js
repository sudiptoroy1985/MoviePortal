import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
            <meta name="description" content="A movies portal"></meta>
            <meta charSet="utf-8"></meta>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/png" href="/icon.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        <style global jsx>{`
            body {
                margin: 0;
                background: #f0f0f0;
                color: #ef5ba1;
                font-family: 'Roboto', sans-serif;
            }
            p {
              line-height: 0.9px;
            }
        `} </style>
      </html>
    );
  }
}
