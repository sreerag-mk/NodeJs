const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("seerag manoj this isnew new n ewen wne nw e");
});

server.listen(3000, () => {
  console.log("Sreerag manoj");
});
