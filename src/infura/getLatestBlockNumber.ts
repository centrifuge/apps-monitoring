import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

async function getLatestBlockNumber(network: 'mainnet' | 'goerli') {
  try {
    const infuraUrl = process.env[`INFURA_${network.toUpperCase()}_URL`];

    const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

    await provider.getBlockNumber();
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export { getLatestBlockNumber };
