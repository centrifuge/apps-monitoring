import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv';
import { getLatestBlockNumber } from './getLatestBlockNumber';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

try {
  await getLatestBlockNumber('mainnet');
} catch (error) {
  Sentry.captureException(`Error pinging Infura Mainnet: ${error}`);
}
