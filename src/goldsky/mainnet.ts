import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getPools } from './getPools';

async function pingGoldskyMainnet(request: Request, response: Response) {
  try {
    await getPools('mainnet');
    response.send('OK');
  } catch (error) {
    sendSlackMessage(
      '<!channel> Something went wrong with the Goldsky Mainnet endpoint!',
    );
    sendTelegramMessage(
      'Something went wrong with the Goldsky Mainnet endpoint!',
    );
  }
}

export { pingGoldskyMainnet };
