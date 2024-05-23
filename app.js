const express = require('express');
const chalk = require('chalk');

// import createDebug from 'debug'
// const debug = createDebug('app')
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{

    res.send('Hello ANIROOT');

})

// app.listen(port, ()=>{

//     console.log("Listening on port " + chalk.red(port));

// } )

// app.listen(port, ()=>{

//     console.log("Listening on port " + port);

// } )

app.listen(port, ()=>{

    debug("Listening on port " + chalk.red(port));

} )