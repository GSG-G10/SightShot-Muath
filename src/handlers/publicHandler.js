const fs = require('fs');
const path = require('path');

const mimeType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpg',
  js: 'text/javascript',
  json: 'application/json',
  png: 'image/png',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
  woff2: 'font/woff2',
  gif: 'image/gif',
};

const index = (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error 500');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};
const pageHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', fileRequest);
  const errorPath = path.join(__dirname, '..', '..', 'public', 'error.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(errorPath, (reqError, errorData) => {
        if (reqError) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Server Error 500');
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(errorData);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
const styleHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', 'assest', 'style', fileRequest);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error 500');
    } else {
      res.writeHead(200, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
const scriptHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', 'assest', 'js', fileRequest);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error 500');
    } else {
      res.writeHead(200, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
const fontsHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', 'assest', 'fonts', fileRequest);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error 500');
    } else {
      res.writeHead(200, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
const imagesHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', 'assest', 'images', fileRequest);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error 500');
    } else {
      res.writeHead(200, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
const errorHandler = (req, res) => {
  const file = req.url.split('/');
  const fileRequest = file[file.length - 1];
  const fileType = fileRequest.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', fileRequest);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Server Error 500');
    } else {
      res.writeHead(404, { 'Content-Type': mimeType[fileType] });
      res.end(data);
    }
  });
};
module.exports = {
  index,
  styleHandler,
  scriptHandler,
  fontsHandler,
  imagesHandler,
  pageHandler,
  errorHandler,
};
