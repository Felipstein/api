export interface EnvConfig {
  MONGO_URI: string,
  PORT: number,
  NODE_ENV: 'development' | 'production',
}

export const env = process.env as unknown as EnvConfig;
