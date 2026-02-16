const express = require('express');
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')

const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use('/host',hostRouter);

app.use((req,res,next)=> {
    res.status(404).send("<h1>Your page is not found</h1>")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})