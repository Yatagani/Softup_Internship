import path from 'path';
import express from 'express';


const app = express();

const PORT = 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
// const includesPath = path.join(__dirname, '../templates/includes');

app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Welcome to my site' })
  })

app.get('/weather', (req, res) => {
    res.send('Weather page');
});

app.listen(PORT, () => {
    console.log('Listening on port %s', PORT);
});
