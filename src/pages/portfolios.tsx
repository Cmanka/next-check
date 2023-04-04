import { type GetStaticProps } from 'next';

import { PortfoliosScreen, type PortfoliosServerSideProps } from '@/components/screens/portfolios';
import { PortfolioService } from '@/services/portfolio.service';

const PortfoliosPage = ({ portfolios }: PortfoliosServerSideProps) => {
  return <PortfoliosScreen portfolios={portfolios} />;
};

export const getStaticProps: GetStaticProps<PortfoliosServerSideProps> = async () => {
  const portfolios = await PortfolioService.getPortfolios();

  return { props: { portfolios }, revalidate: 10 };
};

export default PortfoliosPage;
