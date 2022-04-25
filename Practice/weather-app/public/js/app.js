console.log('Client side Js is running');

const cardImage = document.querySelector('#cardImage');
const headerIcon = document.querySelector('#header_icon');
const genre = document.querySelector('#genre');

// const currentURL = window.location.href;

// Add SSh keys
// Add start to package json

const showDetails = (e) => {
    const id = e.target.id;
    window.location.replace('http://localhost:3000/anime/details?id=' + id);
}

const showList = () => {
    window.location.replace('http://localhost:3000/anime');
}
if (genre) {
    genre.addEventListener('change', (e) => {
      console.log('here', e.target.value);
    });
}

if (cardImage) {
    cardImage.addEventListener('click', showDetails);
}

if (headerIcon) {
    headerIcon.addEventListener('click', showList);
}