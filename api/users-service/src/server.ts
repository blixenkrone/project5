import cors from 'cors';
import express from 'express';
import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';
import bodyParser from 'body-parser';
import { config } from './config/config';
import { V0_USER_MODELS } from './controllers/v0/model.index';

(async () => {
  sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8081;

  app.use(bodyParser.json());

  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: config.url,
  }));

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get('/', async (req, res) => {
    res.send('users api');
  });


  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${config.url}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
