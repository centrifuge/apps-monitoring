import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

async function getPools() {
  try {
    const { data } = await axios({
      url: process.env.SUBQUERY_URL,
      method: 'post',
      data: {
        query: `
          query {
            pools {
              nodes {
                id
              }
            }
          }
        `,
      },
    });

    if (!data?.data?.pools?.nodes?.length) {
      throw new Error('No pools found');
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export { getPools };
