import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

async function pingInfuraGoerli(request: Request, response: Response) {
  try {
    await getLatestBlockNumber('goerli');
    response.send('OK');
  } catch {
    sendSlackMessage(
      '<!channel> Something went wrong with the Infura Goerli endpoint!',
    );
    sendTelegramMessage(
      'Something went wrong with the Infura Goerli endpoint!',
    );
  }
}

export { pingInfuraGoerli };
