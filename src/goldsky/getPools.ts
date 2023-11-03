import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

async function getPools(network: 'mainnet' | 'goerli') {
  try {
    const { data } = await axios({
      url: process.env[`GOLDSKY_${network.toUpperCase()}_URL`],
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

    if (!data?.data?.pools?.length) {
      throw new Error('No pools found');
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export { getPools };
