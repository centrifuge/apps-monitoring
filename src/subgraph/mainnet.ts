import * as Sentry from '@sentry/node';
import * as dotenv from 'dotenv';
import { getPools } from './getPools';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

try {
  await getPools('mainnet');
} catch (error) {
  Sentry.captureException(`Error pinging Infura Mainnet: ${error}`);
}
