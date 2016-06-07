/**
 * Created by user on 25/04/2016.
 */
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/morgan/morgan.d.ts"/>
/// <reference path="../typings/body-parser/body-parser.d.ts"/>
/// <reference path="../typings/passport/passport.d.ts"/>
/// <reference path="../typings/passport-strategy/passport-strategy.d.ts"/>




import * as express from 'express';
import bodyParser = require("body-parser");
import morgan = require("morgan");

var passport	= require('passport');

const app = express();

/**
 * ROUTES
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//log to console
app.use(morgan(morgan.format['dev']));

//demo
app.get('/', (req, res) => res.send({hello: 'Hello from Express'}));


// Use the passport package in our application
app.use(passport.initialize());

/**
 * Run SERVER
 * @type {number}
 */
let port: number = +process.env.PORT || 3000;
const server = app.listen(port, 'localhost', () => {
    const {address} = server.address();
    let envport = server.address().port;

    console.log('Listening on http://' + address + ':' + envport);
});
