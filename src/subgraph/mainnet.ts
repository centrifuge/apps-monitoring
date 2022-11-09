import { sendSlackMessage } from '../sendSlackMessage';
import { getPools } from './getPools';

async function pingSubgraphMainnet() {
  try {
    await getPools('mainnet');
  } catch {
    sendSlackMessage('Something went wrong with the subgraph!');
  }
}

export { pingSubgraphMainnet };
