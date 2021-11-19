import refs from './refs';
import movieCardTpl from '../templates/movie-card.hbs';

export default function fetchMovie(movie) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=744d4295a955a17cccf78658c430f199`,
  )
    .then(response => {
      return response.json();
    })
    .then(movie => {
      const markup = movieCardTpl(movie);
      refs.movieCardContainer.innerHTML = markup;
    })
    .catch(error => console.log(error));
}

function toggleModal() {
  refs.movieCardContainer.classList.toggle('is-hidden');
}

refs.galleryMovies.addEventListener('click', openMovieModal);

function openMovieModal(evt) {
  evt.preventDefault();
  const id = Number(evt.target.id);
  toggleModal();
  fetchMovie(id);
  window.addEventListener('keydown', closeMovieModalByEsc);
  refs.movieCardContainer.addEventListener('click', closeMovieModalByClick);
}

function closeMovieModalByEsc(evt) {
  if (evt.key === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeMovieModalByEsc);
    refs.movieCardContainer.removeEventListener('click', closeMovieModalByClick);
  }
}

function closeMovieModalByClick(evt) {
  if (evt.target === refs.movieCardContainer) {
    toggleModal();
    refs.movieCardContainer.removeEventListener('click', closeMovieModalByClick);
    window.removeEventListener('keydown', closeMovieModalByEsc);
  }
}
// функции для кнопок модалки
refs.movieCardContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-card-close-btn')) {
    // Кнопка закрытия модалки
    toggleModal();
    window.removeEventListener('keydown', closeMovieModalByEsc);
    refs.movieCardContainer.removeEventListener('click', closeMovieModalByClick);
  } else if (e.target.classList.contains('modal-card-btn-watched')) {
    //Функция для кнопки "ADD TO WACHED"
    console.log('кнопка 1');
  } else if (e.target.classList.contains('modal-card-btn-queue')) {
    // Функция для кнопки "ADD TO QUEUE"
    console.log('кнопка 2');
  }
});
