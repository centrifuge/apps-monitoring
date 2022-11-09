import { sendSlackMessage } from '../sendSlackMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

try {
  await getLatestBlockNumber('mainnet');
} catch (error) {
  sendSlackMessage('Something went wrong with the Infura Mainnet endpoint!');
}
