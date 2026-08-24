import { Html, Head, Main, NextScript } from "next/document";
import { DEV } from "../helpers/config";

// JSX comments ({/* ... */}) are stripped at compile time and never reach the
// served HTML, so the credit is emitted as a real HTML comment at runtime —
// visible in the page source as a subliminal hire-me easter egg.
const hireMeCredit = `<!-- Built with care by ${DEV.name} · Freelance availability: ${DEV.upworkUrl} -->`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: hireMeCredit }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
