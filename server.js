const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server'); //must state where debug is running from
const morgan = require('morgan');
const path = require('path');

const server = express();

/*middleware*/
server.use(morgan('tiny')); // 'combined' would give detailed info
server.use(express.static(path.join(__dirname, '/public/'))); // handling static pages. (If express finds a static file at /public/)
                        //path.join(< what directory are you running from? >)

server.get('/',(req, res) => {
    //handle response
    res.send('It works!');
});

server.listen(3000, () => {
    debug(`listening on port ${chalk.green('3000')}`);
});