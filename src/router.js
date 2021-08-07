const publicHandler = require('./handlers/publicHandler');

const router = (req, res) => {
  const endpoint = req.url;
  const fileType = endpoint.split('.')[1];
  if (endpoint === '/' || endpoint === '/public') {
    publicHandler.index(req, res);
  } else if (fileType === 'html') {
    publicHandler.pageHandler(req, res);
  } else if (fileType === 'css') {
    publicHandler.styleHandler(req, res);
  } else if (fileType === 'js') {
    publicHandler.scriptHandler(req, res);
  } else if (fileType === 'woff2') {
    publicHandler.fontsHandler(req, res);
  } else if (fileType === 'jpg' || fileType === 'png' || fileType === 'gif' || fileType === 'svg') {
    publicHandler.imagesHandler(req, res);
  } else if (fileType === 'html') {
    publicHandler.pageHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>error 404 </h1>');
  }
};
module.exports = router;
