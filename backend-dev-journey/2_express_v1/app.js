const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

//Middleware
app.use((req, res, next) => {
    const name = req.body
    console.log("Name body:", name)
    console.log("This is middleware....", name.name);
    // next();
    res.send("This is res")
    // return res.json({
    //   msg: "This is middleware response",
    //   name: name.name,
    // })

})

app.listen(PORT, ()=> {
   console.log(`Server running on port: ${PORT}`);
})