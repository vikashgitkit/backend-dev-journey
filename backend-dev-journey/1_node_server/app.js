import { createServer } from 'http';

const server = createServer((req, res)=> {
    console.log("Req received:", req);
});

const PORT = 3003;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});