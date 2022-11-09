import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

async function pingInfuraGoerli() {
  try {
    await getLatestBlockNumber('goerli');
  } catch {
    sendSlackMessage('Something went wrong with the Infura Goerli endpoint!');
    sendTelegramMessage(
      'Something went wrong with the Infura Goerli endpoint!',
    );
  }
}

export { pingInfuraGoerli };
