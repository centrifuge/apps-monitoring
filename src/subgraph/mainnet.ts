import { sendSlackMessage } from '../sendSlackMessage';
import { getPools } from './getPools';

try {
  await getPools('mainnet');
} catch {
  sendSlackMessage('Something went wrong with the subgraph!');
}
