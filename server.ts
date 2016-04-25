/**
 * Created by user on 25/04/2016.
 */
import * as express from 'express';
const app = express(); // 1

app.get('/', (req, res) => res.send('Hello from Express')); // 2
app.get('/products', (req, res) => res.send('Got a request for products')); // 2
app.get('/reviews', (req, res) => res.send('Got a request for reviews')); // 2

const server = app.listen(8000, 'localhost', () => { // 3
   const {address, port} = server.address(); // 4
   console.log('Listening on http://localhost:' + port + address);
});
