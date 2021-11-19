import renderList from '../templates/movie-list.hbs';
import apiPopular from './apiPopular';
import './refs'


function getMovie() {
    apiPopular()
        .then(response => {
            return response.json()
        })
        .then(movie => {
            const renderMovie = renderList(movie);
            refs.movieList.insertAdjacentHTML('beforeend', renderMovie);

            
        }).catch(error => {
            alert(
                'Page not found'
            )
            console.log("404")
            console.log(error);
        })

};
getMovie();
