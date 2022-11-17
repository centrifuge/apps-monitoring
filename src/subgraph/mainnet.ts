import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getPools } from './getPools';

async function pingSubgraphMainnet(request: Request, response: Response) {
  try {
    await getPools('mainnet');
    response.send('OK');
  } catch {
    sendSlackMessage('<!channel> Something went wrong with the subgraph!');
    sendTelegramMessage('Something went wrong with the subgraph!');
  }
}

export { pingSubgraphMainnet };
