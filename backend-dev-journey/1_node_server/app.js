import { createServer } from 'http';

const server = createServer((req, res)=> {
    console.log("Req received:", req);
    process.exit();//stops event loop
});

const PORT = 3003;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});