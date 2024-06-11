import { type TickerData } from '@/types/types';

// Limited to 250 requests per day
// Standard trading day is open 6.5 hours
// (6.5hr * 60min * 60sec * 1000ms) / 250 requests
// Called every ~1.7min, rounded up to account for testing/error
// Can change this later to ~93600
export const API_TIMEOUT = 100000;

export const CRYPTO_ENDPOINT = 'wss://ws-feed.exchange.coinbase.com';
export const STOCK_ENDPOINT = 'https://financialmodelingprep.com/api/v3/quote/';

export const DEFAULT_TICKER = {
  curPrice: -1,
  prevPrice: -1,
  dayPercentage: -1,
  dirFilter: 'fill-emerald-500 -rotate-90',
  status: 'CONNECTING'
} as TickerData;

export const SizeMap = {
  SMALL: {
    name: 'text-4xl',
    price: 'text-4xl',
    status: 'text-4xl',
    padding: 'pl-1',
    iconSize: 'h-5',
    info: 'text-2xl'
  },
  LARGE: {
    name: 'text-6xl',
    price: 'text-7xl',
    status: 'text-6xl',
    padding: 'pl-4 pt-6',
    iconSize: 'h-10',
    info: 'text-5xl'
  },
  MEDIUM: {
    name: 'text-6xl',
    price: 'text-7xl',
    status: 'text-6xl',
    padding: 'pl-4 pt-6',
    iconSize: 'h-10',
    info: 'text-5xl'
  }
};
