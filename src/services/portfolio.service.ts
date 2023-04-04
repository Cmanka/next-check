import { api } from '@/configs/api.config';
import { type Portfolio } from '@/interfaces/portfolio.interface';

class PortfolioServiceClass {
  async getPortfolios() {
    try {
      const { data } = await api.get<Portfolio[]>('/portfolios');

      return data;
    } catch (e) {
      throw new Error('Cannot get portfolios');
    }
  }

  async getPortfolioById(id: string) {
    try {
      const { data } = await api.get<Portfolio>('/portfolios', { params: { id } });

      return data;
    } catch (e) {
      throw new Error('Cannot get portfolio');
    }
  }
}

export const PortfolioService = new PortfolioServiceClass();
