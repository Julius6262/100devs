const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  const sendFile = (filePath, contentType) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading file:', filePath);
        return;
      }
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  };

  const sendJson = (obj) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj));
  };

  switch (page) {
    case '/':
      sendFile('index.html', 'text/html');
      break;
    case '/otherpage':
      sendFile('otherpage.html', 'text/html');
      break;
    case '/otherotherpage':
      sendFile('otherotherpage.html', 'text/html');
      break;
    case '/api':
      if ('student' in params) {
        const student = params['student'];
        const objToJson = {
          name: student === 'leon' ? 'leon' : 'unknown',
          status: student === 'leon' ? 'Boss Man' : 'unknown',
          currentOccupation: student === 'leon' ? 'Baller' : 'unknown'
        };
        sendJson(objToJson);
      }
      break;
    case '/css/style.css':
      sendFile('css/style.css', 'text/css');
      break;
    case '/js/main.js':
      sendFile('js/main.js', 'text/javascript');
      break;
    default:
      figlet('404!!', (err, data) => {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
  }
});

server.listen(8000);
