console.log('Client side Js is running');

const cardImage = document.querySelector('#cardImage');
const headerIcon = document.querySelector('#header_icon');
const genre = document.querySelector('#genre');
const search = document.getElementById('search');

const showList = () => {
    window.location.replace('/anime');
}

const showDetails = (e) => {
    const id = e.target.id;
    window.location.replace('/anime/details?id=' + id);
}

const getInputValue = (e) => {
    if(e.keyCode === 13) {       
        const inputValue = e.target.value;
        window.location.replace('/anime?text=' + inputValue);
    }
}

const getSelectValue = (e) => {
    const selected = e.target.value;
    window.location.replace('/anime?category=' + selected);
}

if (headerIcon) {
    headerIcon.addEventListener('click', showList);
    cardImage.addEventListener('click', showDetails);
    genre.addEventListener('change', getSelectValue);
    search.addEventListener('keydown', getInputValue);
}