import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

async function getLatestBlockNumber(
  service: 'infura' | 'quicknode',
  network: 'mainnet' | 'goerli',
) {
  try {
    const rpcEndpoint =
      process.env[`${service.toUpperCase()}_${network.toUpperCase()}_URL`];

    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);

    await provider.getBlockNumber();
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export { getLatestBlockNumber };
