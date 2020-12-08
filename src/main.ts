import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';

import { AppModule } from './app.module';

const port = process.env.PORT || 4000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
  });
  app.use(helmet());

  await app.listen(port);
}
bootstrap().then(() => {
  console.log('App is running on %s port', port);
});
