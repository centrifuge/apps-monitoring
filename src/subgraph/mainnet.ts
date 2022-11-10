import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getPools } from './getPools';

async function pingSubgraphMainnet() {
  try {
    await getPools('mainnet');
  } catch {
    sendSlackMessage('<!channel> Something went wrong with the subgraph!');
    sendTelegramMessage('Something went wrong with the subgraph!');
  }
}

export { pingSubgraphMainnet };
