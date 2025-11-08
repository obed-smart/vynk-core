import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: Number(process.env.PORT) || 3000,
  db: { uri: process.env.DATABASE_URL || 'mongodb://localhost:27017/vynk' },
  starknet: {
    network: process.env.STARKNET_NETWORK || 'sepolia',
    rpcUrl: process.env.RPC_URL || 'https://starknet-sepolia.public.blastapi.io',
    paymaster: {
      rpcUrl: process.env.PAYMASTER_RPC_URL || '',
      apiKey: process.env.PAYMASTER_API_KEY || '',
      strategy: (process.env.PAYMASTER_STRATEGY as 'sponsor' | 'user-pays') || 'sponsor',
    },
  },
  encryption: {
    secret: process.env.ENCRYPTION_SECRET || 'default_dev_secret',
  },
  isDev: process.env.NODE_ENV !== 'production',
};
