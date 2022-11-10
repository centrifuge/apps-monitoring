import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

async function pingInfuraMainnet() {
  try {
    await getLatestBlockNumber('mainnet');
  } catch {
    sendSlackMessage(
      '<!channel> Something went wrong with the Infura Mainnet endpoint!',
    );
    sendTelegramMessage(
      'Something went wrong with the Infura Mainnet endpoint!',
    );
  }
}

export { pingInfuraMainnet };
