const express = require('express');

const app = express()

app.get('/',(req, res, next) => {
    console.log(req.url, res.method);
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href="/add-home">Add Home</a>
        `);
    
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})