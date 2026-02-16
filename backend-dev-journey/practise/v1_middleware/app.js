const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//Middleware
app.use((req, res, next) => {
    console.log("First dummy midleware", req.url, req.method);
    next()
})

app.use((req, res, next) => {
    console.log("second dummy midleware", req.url, req.method);
    next()
})

// app.use((req, res, next) => {
//     console.log("Third midleware", req.url, req.method);
//     res.send("3rd midlleware response")
// })

app.get('/', (req, res, next) => {
    console.log(`This is get req`);
    res.send("Get response")
})

app.listen(PORT, ()=> {
   console.log(`Server running on port: ${PORT}`);
})