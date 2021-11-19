import { createPopularMoviesGallery, renderLibraryGallery } from './gallery';
// import { libraryMovies } from './my-library'
import { resetPagination } from './pagination';
import refs from './refs'

// Навигация в хедере
refs.parentEl.addEventListener('click', e => {
  if (e.target === refs.logoEl || e.target === refs.homeBtn || e.target === refs.logoBtn) {
    resetPagination()
    createPopularMoviesGallery();
    homeBGI();
  }

  if(e.target === refs.libraryBtn) {
    libraryBGI()
    refs.gallery.innerHTML = '';
    // тут будет фунция отрисовки библиотеки
  }

  return;
});

function homeBGI() {
  refs.headerBg.classList.remove('header-library');
  refs.headerBg.classList.add('header-home');
  refs.homeBtn.classList.add('header__nav--link--current');
  refs.libraryBtn.classList.remove('header__nav--link--current');
};

// Смена фона хедера для LIBRARY
function libraryBGI() {
  refs.headerBg.classList.remove('header-home');
  refs.headerBg.classList.add('header-library');
  refs.homeBtn.classList.remove('header__nav--link--current');
  refs.libraryBtn.classList.add('header__nav--link--current');
};