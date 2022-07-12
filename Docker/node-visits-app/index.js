import express from 'express';
import { createClient } from 'redis';

const app = express();

const client = createClient({
  url: 'redis://redis-server:6379'
});

(async() => {
  await client.connect();
  await client.set('visits', 0);

  client.on('connect', () => console.log('Redis Client Connected...'));
  client.on('error', (err) => console.log('Redis Client Error', err));  
})();

app.get('/', async (req, res) => {
  const visits = await client.get("visits");
  res.send('Number of visits: ' + visits);
  await client.set('visits', parseInt(visits) + 1);
});

app.listen(8081, () => {
  console.log('Listening on port 8081')
});