const express = require('express');

const app = express()

app.use((req, res, next) => {
    console.log(req.url, res.method);
    res.send("Welcome to airbnb");
    
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})