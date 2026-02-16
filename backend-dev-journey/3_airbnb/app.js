const express = require('express');

const app = express()

app.use((req,res, next)=> {
    console.log(req.url, req.method);
    next();
})

app.get('/',(req, res, next) => {
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href="/add-home">Add Home</a>
        `); 
});

app.get('/add-home',(req, res, next) => {
    res.send(`
        <h1>Register your home here:</h1>
        <form action="/add-home" method="POST">
           <input type="text" name="houseName" placeholder="Enter the name of your house" />
           <input type="submit"  />
        </form>
        `); 
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})