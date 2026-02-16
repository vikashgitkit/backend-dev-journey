const express = require('express');

const app = express();
const PORT = 3000;

//Middleware
app.use((req, res, next) => {
    console.log("This is middleware....");
})

app.listen(PORT, ()=> {
   console.log(`Server running on port: ${PORT}`);
})