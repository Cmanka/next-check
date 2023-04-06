import { type DocumentProps, Head, Html, Main, NextScript } from 'next/document';

const Document = ({ __NEXT_DATA__: { locale } }: DocumentProps) => {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
