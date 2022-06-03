const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	if (req.url === "/proverb") {
		let data = fs.readFileSync("JSON/proverbs.json", "utf8");
		res.writeHead(200, { "content-type": "text/html", "Access-Control-Allow-Origin": "*" });
		res.write(data);
		res.end();
	}
});

server.listen(6969, "127.0.0.1", () => console.log("serrrrrrrver is running "));
