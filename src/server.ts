import { app } from './app';
import { connectDatabase } from './database';
import { env } from './config/env.config';

const port = env.PORT || 3333;

console.info(`Starting API on ${env.NODE_ENV} mode.`);

connectDatabase()
  .then(() => {
    app.listen(port, () => console.log(`Server started at port ${port}`));
  })
  .catch((error) => {
    if(error.message) {
      console.error(`❌ ${error.message} (status ${error.statusCode})`);
    }
    console.log('Aborting the server...');
    process.exit(1);
  });
