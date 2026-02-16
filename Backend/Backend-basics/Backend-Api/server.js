import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/api") {
    const details = [
      {
        name: "Ali",
        age: 23,
        country: "Germany",
      },
      {
        name: "Ali",
        age: 23,
        country: "Germany",
      },
    ];
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(details));
    return;
  }
});

server.listen(8000, () => {
  console.log("litening on http://localhost:8000");
});
