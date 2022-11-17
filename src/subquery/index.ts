import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getPools } from './getPools';

async function pingSubquery(request: Request, response: Response) {
  try {
    await getPools();
    response.send('OK');
  } catch {
    sendSlackMessage('<!channel> Something went wrong with the subquery!');
    sendTelegramMessage('Something went wrong with the subquery!');
  }
}

export { pingSubquery };
