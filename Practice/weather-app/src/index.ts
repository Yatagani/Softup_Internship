import path from 'path';
import hbs from 'hbs';
import express from 'express';
import { getAnimes, getAnime } from './utils';

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath));

app.get('/', async (req, res) => {
    res.redirect('/anime');
  })

app.get('/anime', async (req, res) => {
    const animes = await getAnimes();

    if (!animes) { return }

    const data = animes.map(item => {
        return {
            id: item.id,
            link: item.links.self,
            title: item.attributes.canonicalTitle,
            description: item.attributes.description,
            coverImage: item.attributes.coverImage?.small,
            posterImage: item.attributes.posterImage?.small,
        }
    })

    res.render('index', {
        headerTitle: "Anime List",
        animes: data,
    })

})

app.get('/anime/details', async (req, res) => {

    const id = req.query.id;
    const anime = await getAnime(id as string);

    if (!anime) { return }
    
    const data = {
            id: anime['id'],
            title: anime['attributes'].canonicalTitle,
            description: anime['attributes'].description,
            coverImage: anime['attributes'].coverImage?.small,
            posterImage: anime['attributes'].posterImage?.small,
    };
    
    res.render('details', {
        headerTitle: "Anime List",
        anime: data,
    })

})

  app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found.'
    })
})


app.listen(port, () => {
    console.log('Listening on port %s', port);
});
