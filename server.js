const http = require("http");
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {"content-type":"text/plain"});
  res.end("Hello from Azure App Service via GitHub Actions!\n");
}).listen(port);
