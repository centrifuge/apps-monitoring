import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

async function getPools(network: 'mainnet' | 'goerli') {
  try {
    const result = await axios({
      url: process.env[`SUBGRAPH_${network.toUpperCase()}_URL`],
      method: 'post',
      data: {
        query: `
          query {
            pools(first: 100) {
              shortName
            }
          }
        `,
      },
    });

    if (!result?.data?.data?.pools?.length) {
      throw new Error('No pools found');
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export { getPools };
