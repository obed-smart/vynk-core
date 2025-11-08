type PaymasterConfig = {
  rpcUrl?: string;
  apiKey?: string;
  strategy?: 'sponsor' | 'user-pays';
};

type StarknetConfig = {
  network: string;
  rpcUrl: string;
  paymaster?: PaymasterConfig;
};

export type AppConfig = {
  port: number;
  db: { uri: string };
  starknet: StarknetConfig;
  encryption: { secret: string; strategy: 'local' | 'external' };
  isDev: boolean;
};
