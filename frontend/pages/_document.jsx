import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        rel="stylesheet"
      ></link>

      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <div id="modal-overlay" />
        <div id="bg-overlay" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
