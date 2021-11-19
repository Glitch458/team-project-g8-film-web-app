import { createPopularMoviesGallery, renderLibraryGallery } from './gallery';
import { resetPagination } from './pagination';
import refs from './refs'

// Навигация в хедере
refs.parentEl.addEventListener('click', e => {
  if (e.target === refs.logoEl || e.target === refs.homeBtn || e.target === refs.logoBtn) {
    resetPagination()
    createPopularMoviesGallery();
    changeBGI();
  }

  if(e.target === refs.libraryBtn) {
    changeBGI()
    // тут будет фунция отрисовки библиотеки
  }

  return;
});

function changeBGI () {
  refs.headerBg.classList.toggle('header-library');
  refs.headerBg.classList.toggle('header-home');
  refs.homeBtn.classList.toggle('header__nav--link--current');
  refs.libraryBtn.classList.toggle('header__nav--link--current');
} 