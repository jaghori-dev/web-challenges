import { createServer } from "node:http";

export const server = createServer((request, response)=>{
    console.log(request.url)
    if (request.url === '/api/fish/1'){
        response.end('Shrimp')
        return
    }
    if(request.url === '/api/fish/2'){
        response.statusCode = 200
        return response.end('Shark')
    }
    response.statusCode = 404
    response.end("not found")
})

// server.listen(3000, ()=> {
//     console.log("listening on http://localhost:3000")
// })
