import { type Asset } from './asset.interface';

export interface Portfolio {
  id: string;
  name: string;
  description: string;
  assets: Asset[];
}
