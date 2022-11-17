import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getLatestBlockNumber } from './getLatestBlockNumber';

async function pingInfuraMainnet(request: Request, response: Response) {
  try {
    await getLatestBlockNumber('mainnet');
    response.send('OK');
  } catch (error) {
    console.log(error);
    sendSlackMessage(
      '<!channel> Something went wrong with the Infura Mainnet endpoint!',
    );
    sendTelegramMessage(
      'Something went wrong with the Infura Mainnet endpoint!',
    );
  }
}

export { pingInfuraMainnet };
