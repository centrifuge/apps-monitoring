import { sendSlackMessage } from '../sendSlackMessage';
import { sendTelegramMessage } from '../sendTelegramMessage';
import { getPools } from './getPools';

async function pingSubquery() {
  try {
    await getPools();
  } catch {
    sendSlackMessage('<!channel> Something went wrong with the subquery!');
    sendTelegramMessage('Something went wrong with the subquery!');
  }
}

export { pingSubquery };
