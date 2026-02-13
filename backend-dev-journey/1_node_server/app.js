import { createServer } from 'http';

const server = createServer((req, res)=> {
    console.log("Req received:", req.method, req.url, req.headers);
    // process.exit();//stops event loop

    if(req.url === '/'){
       res.setHeader('Content-Type', 'text/html');
       res.write('<html>');
       res.write('<head><title>Complete node backend</title></head>');
       res.write('<body><h1>This is Home route</h1></body>')
       res.write('</html>')
       res.end();
       return
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete node backend</title></head>');
        res.write('<body><h1>This is product</h1></body>')
        res.write('</html>')
        res.end();
        return
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete node backend</title></head>');
        res.write('<body><h1>This is default</h1></body>')
        res.write('</html>')
        res.end();
    
});

const PORT = 3003;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});