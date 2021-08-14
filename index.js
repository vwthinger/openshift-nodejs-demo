const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Context-type": "text/html",
    });
    res.end("<h1>Hello World from OpenShift NodeJS Application!!!!</h1>");
});

server.listen(8080, () => {
    console.log("Listening to requests on Port 8000");
});
