import { Request, Response } from '@google-cloud/functions-framework';
import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getLatestBlockNumber } from '../getLatestBlockNumber';

async function pingQuicknodeMainnet(request: Request, response: Response) {
  try {
    await getLatestBlockNumber('quicknode', 'mainnet');
    response.send('OK');
  } catch (error) {
    sendSlackMessage(
      '<!channel> Something went wrong with the Quicknode Mainnet endpoint!',
    );
    sendTelegramMessage(
      'Something went wrong with the Quicknode Mainnet endpoint!',
    );
  }
}

export { pingQuicknodeMainnet };
