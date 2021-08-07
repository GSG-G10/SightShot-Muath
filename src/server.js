const http = require('http');
const router = require('./router');
require('env2')('.env');

const PORT = process.env.PORT || 4000;
const server = http.createServer(router);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`here http://localhost:${PORT}`);
});
