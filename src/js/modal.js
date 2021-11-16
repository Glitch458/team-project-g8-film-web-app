import movieCardTpl from '../templates/movie-card.hbs';
import { backdropEl, openModal, closeModal } from './backdrop';


const refs = {
  movieCardContainer: document.querySelector('.modal-movie-container'),
  galleryMovies: document.querySelector('.gallery'),
  // closeBtn: document.querySelector('.close-btn')
};

console.log('кнопка закрытия', refs.movieCardContainer)

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
// функции для кнопок модалки
refs.movieCardContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('mobile-menu__icon')) {
    // Кнопка закрытия модалки
    closeModal();
    window.removeEventListener('keydown', closeContributorsModalByEsc);
    backdropEl.removeEventListener('click', closeContributorsModalByClick);
  } else if (e.target.classList.contains('modal-card-btn-watched' || 'modal-card-btn-text-first')) {
    //Функция для кнопки "ADD TO WACHED"
    console.log('кнопка 1');
  } else if (e.target.classList.contains('modal-card-btn-queue' || 'modal-card-btn-text-second')) {
    // Функция для кнопки "ADD TO QUEUE"
    console.log('кнопка 2');
  }
});


