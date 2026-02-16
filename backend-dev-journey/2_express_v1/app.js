const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//Middleware

app.use('/',(req, res, next) => {
    const name = req.body
    console.log("Name1 body:", name)
    console.log("This is middleware1....", name.name);
    next();

})
app.use('/',(req, res, next) => {
    const name = req.body
    console.log("Name2 body:", name)
    console.log("This is middleware2....", name.name);
    // next();
    res.send("This is res1")
    // return res.json({
    //   msg: "This is middleware response",
    //   name: name.name,
    // })

})

app.use('/',(req, res, next) => {
    const name = req.body
    console.log("Name3 body:", name)
    console.log("This is middleware3....", name.name);
    next();
})

app.listen(PORT, ()=> {
   console.log(`Server running on port: ${PORT}`);
})