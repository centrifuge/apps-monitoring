import { sendSlackMessage } from '../sendSlackMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

try {
  await getLatestBlockNumber('goerli');
} catch (error) {
  sendSlackMessage('Something went wrong with the Infura Goerli endpoint!');
}
