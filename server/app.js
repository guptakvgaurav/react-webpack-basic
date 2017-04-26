import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';

const app = express();
const PORT =  9000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', (req, res) => {
  res.status(200).json([
    {id: 1, name: 'Manoj', email: 'manoj.nama@tothenew.com'},
    {id: 2, name: 'Sakshi', email: 'sakshi.tyagi@tothenew.com'},
    {id: 3, name: 'Nikhil', email: 'nikhil.bhandari@tothenew.com'}
  ]);
});

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});