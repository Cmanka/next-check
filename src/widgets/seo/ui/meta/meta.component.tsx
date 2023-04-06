import Head from 'next/head';

import { type SeoProps } from './meta.types';

const MetaComponent = ({ children, title, description, keyWords }: SeoProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {description && <meta name="description" content={description} />}
        {keyWords && <meta name="keywords" content={keyWords} />}
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
      </Head>
      {children}
    </>
  );
};

export default MetaComponent;
