import Head from 'next/head';

import { type SeoProps } from './meta.types';

const MetaComponent = ({ children, title, description }: SeoProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content={title} />
        {Boolean(description) && <meta property="og:description" content={description} />}
      </Head>
      {children}
    </>
  );
};

export default MetaComponent;
