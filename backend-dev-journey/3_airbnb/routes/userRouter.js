const path = require('path')

const express = require('express');
const userRouter = express.Router();

userRouter.get('/',(req, res, next) => {
    res.sendFile() 
});

module.exports = userRouter;