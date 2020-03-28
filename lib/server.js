'use strict';

const fs = require('fs');
const path = require('path');
const open = require('open');
const chokidar = require('chokidar');
const express = require('express');
const app = express() ;
const expressWs = require('express-ws')(app);

exports.startServer = (options) => {
  options = options || {};
  app.set('views', path.join(__dirname, '../', 'views'));
  app.set('view engine', 'pug');
  app.use(express.static('public'));

  let server;
  app.get('/', (req, res) => {
    const content = fs.readFileSync(options.file, 'utf8');
    const port = server.address().port;
    res.render('index', { payload: content, port: port });
  });
  app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
      if(msg === 'ws ready') {
        chokidar.watch(options.file).on('change', (path) => {
          ws && ws.readyState === 1 && ws.send('changed');
        });
      }
    });
  });

  server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`app listening on port: ${port}!`);
    open(`http://localhost:${port}/`);
  });
}
