import { Html, Head, Main, NextScript } from "next/document";
import { DEV } from "../helpers/config";
import { body, display } from "../helpers/fonts";

// JSX comments ({/* ... */}) are stripped at compile time and never reach the
// served HTML, so the credit is emitted as a real HTML comment at runtime —
// visible in the page source as a subliminal hire-me easter egg.
const hireMeCredit = `<!-- Built with care by ${DEV.name} · Freelance availability: ${DEV.upworkUrl} -->`;

export default function Document() {
  return (
    <Html lang="en" className={`${display.variable} ${body.variable}`}>
      <Head>
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
