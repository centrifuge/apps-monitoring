import { sendSlackMessage } from '../sendSlackMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

async function pingInfuraGoerli() {
  try {
    await getLatestBlockNumber('goerli');
  } catch (error) {
    sendSlackMessage('Something went wrong with the Infura Goerli endpoint!');
  }
}

export { pingInfuraGoerli };
