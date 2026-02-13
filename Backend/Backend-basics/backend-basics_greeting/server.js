import { createServer } from "node:http";

export const server = createServer((request, response) => {
  console.log(request.url);
    response.end('Hello world!!!')
});

server.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
