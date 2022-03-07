import path from 'path';
import express from 'express';

const app = express();
const PORT = 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send('Weather page');
});

app.listen(PORT, () => {
    console.log('Servers is up on port %s', PORT);
});