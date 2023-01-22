import { resolve } from 'path';
import express, { response } from 'express';
import initVerseController from './controllers/verseController.mjs';

const app = express();
const verseController = initVerseController();

// app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(resolve('dist', 'main.html'));
});

app.get('/verse', verseController.fetchPassage);

// set up webpack in dev env
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  const { default: webpack } = await import('webpack');
  const { default: webpackDevMiddleware } = await import('webpack-dev-middleware');
  const { default: webpackHotMiddleware } = await import('webpack-hot-middleware');
  const { default: webpackConfig } = await import('./webpack_config/webpack.dev.js');

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: (filePath) => /\.html$/.test(filePath),
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);
