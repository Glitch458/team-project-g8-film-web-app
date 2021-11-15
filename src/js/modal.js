import movieCardTpl from '../templates/movie-card.hbs';
import { backdropEl, openModal, closeModal } from './backdrop';

const refs = {
  movieCardContainer: document.querySelector('.modal-movie-container'),
  galleryMovies: document.querySelector('.gallery'),
  closeBtn: document.querySelector('.modal-card-close-btn')
};

console.log(refs.closeBtn)

function fetchMovie(movie) {
  return fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=744d4295a955a17cccf78658c430f199`)
    .then(response => {
      return response.json();
      console.log(response.json())
    })
    .then(movie => {
      const markup = movieCardTpl(movie);
      refs.movieCardContainer.innerHTML = markup;
    })
    .catch(error => console.log(error));
}
// console.log(refs.closeBtn)


refs.galleryMovies.addEventListener('click', openMovieModal);

function openMovieModal(evt) {
  evt.preventDefault();
  const id = Number(evt.target.id);
  openModal()
  fetchMovie(id);
  window.addEventListener('keydown', closeContributorsModalByEsc);
  backdropEl.addEventListener('click', closeContributorsModalByClick);
}

function closeContributorsModalByEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', closeContributorsModalByEsc);
        backdropEl.removeEventListener('click', closeContributorsModalByClick);
  }
}

function closeContributorsModalByClick(evt) {
  if (evt.target === backdropEl) {
    closeModal();
    backdropEl.removeEventListener('click', closeContributorsModalByClick);
    window.removeEventListener('keydown', closeContributorsModalByEsc);

  }
}
