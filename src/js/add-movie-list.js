import renderList from '../templates/movie-list.hbs';
const movieList = document.querySelector('.movie-list');
movieList.insertAdjacentHTML('beforeend', renderList());
