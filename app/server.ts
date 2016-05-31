/**
 * Created by user on 25/04/2016.
 */
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

import * as express from 'express';
import {log, notfound} from './middleware/logger';

const app = express();

app.use('/', log);
// app.get('/', (req, res) => res.send('Hello from Express'));

app.get('/notfound', (req, res) => res.send('Invalid request'));
app.use('/', notfound);

let port: number = +process.env.PORT || 3000;
const server = app.listen(port, 'localhost', () => {
    const {address} = server.address();
    let envport = server.address().port;

    console.log('Listening on http://' + address + ':' + envport);
});
