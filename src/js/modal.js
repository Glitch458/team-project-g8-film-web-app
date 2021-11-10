import movieCardTpl from '../templates/movie-card.hbs';

const refs = {
    movieCardContainer: document.querySelector('.movie-container')
}


function fetchMovie(movie) {
    return fetch('https://api.themoviedb.org/3/movie/255?api_key=744d4295a955a17cccf78658c430f199')
    .then(response => {
        return response.json();
    })
    .then(movie => {
        console.log(movie);
        const markup = movieCardTpl(movie);
        console.log(markup)
        refs.movieCardContainer.innerHTML = markup;
    })
    .catch(eror => console.log(error))
}
console.log(fetchMovie())

// function renderMovieCard() {
//     const markup = modalCard(response);
//     movieCard.innerHTML = markup;
// }

// console.log(onSearch())
