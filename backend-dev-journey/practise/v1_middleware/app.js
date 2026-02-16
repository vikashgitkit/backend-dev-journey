const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//Middleware
app.use((req, res, next) => {
    console.log("First dummy midleware");
    next()
})

app.use((req, res, next) => {
    console.log("second dummy midleware");
    next()
})

app.listen(PORT, ()=> {
   console.log(`Server running on port: ${PORT}`);
})