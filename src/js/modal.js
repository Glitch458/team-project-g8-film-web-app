import movieCardTpl from '../templates/movie-card.hbs';

const refs = {
  movieCardContainer: document.querySelector('.movie-container'),
};

function fetchMovie(movie) {
  return fetch('https://api.themoviedb.org/3/movie/777?api_key=744d4295a955a17cccf78658c430f199')
    .then(response => {
      return response.json();
    })
    .then(movie => {
      const markup = movieCardTpl(movie);
      refs.movieCardContainer.innerHTML = markup;
    })
    .catch(error => console.log(error));
}

fetchMovie();
