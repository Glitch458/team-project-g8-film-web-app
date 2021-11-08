import renderList from '../templates/movie-list.hbs';
import apiPopular from './apiPopular';

const movieList = document.querySelector('.movie-list');


function getMovie() {
    apiPopular()
        .then(response => {
            return response.json()
        })
        .then(movie => {
            const renderMovie = renderList(movie);
            movieList.insertAdjacentHTML('beforeend', renderMovie);

            
        }).catch(error => {
            console.log("404")
            console.log(error);
        })

};
getMovie();
