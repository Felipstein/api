import mongoose from 'mongoose';

import { InternalServerError } from './errors/InternalServerError';
import { env } from './config/env.config';

export async function connectDatabase() {
  if(!env.MONGO_URI) {
    throw new InternalServerError('MONGO_URI not provided on ".env" file.');
  }

  try {
    await mongoose.connect(env.MONGO_URI);
  } catch (err) {
    console.error(`❌ Error connecting to Mongo Database: ${err.message}`);
    console.error(err);
    throw new InternalServerError('Error connecting to Mongo Database.');
  }
}

mongoose.connection.on('connected', () => {
  console.info('✅ Mongo Database connection established.');
});
