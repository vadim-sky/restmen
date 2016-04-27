/**
 * Created by user on 25/04/2016.
 */

/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />
import * as express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello from Express'));
app.get('/products', (req, res) => res.send('Got a request for products'));
app.get('/reviews', (req, res) => res.send('Got a request for reviews'));

let port: number = +process.env.PORT || 3000;
const server = app.listen(port, 'localhost', () => {
    const {address} = server.address();
    console.log('Listening on http://' + address + ':' + port);
});
