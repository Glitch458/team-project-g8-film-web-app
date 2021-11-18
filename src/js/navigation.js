import { createPopularMoviesGallery, renderLibraryGallery } from './gallery';
import { resetPagination } from './pagination';

const homeBtn = document.querySelector('[data-action="link-home"]');
const libraryBtn = document.querySelector('[data-action="link-lib"]');
const logoBtn = document.querySelector('.header__logo--btn');
const logoEl = document.querySelector('.header__icon--logo');
const parentEl = document.querySelector('.header__menu');
const headerBg = document.querySelector('.header');

// Навигация в хедере
parentEl.addEventListener('click', e => {
  if (e.target === logoEl || e.target === homeBtn || e.target === logoBtn) {
    resetPagination();
    createPopularMoviesGallery();
    homeBGI();
  }

  if (e.target === libraryBtn) {
    libraryBGI();
    // тут будет фунция отрисовки библиотеки
  }

  return;
});

// Смена фона хедера для HOME
function homeBGI() {
  headerBg.classList.remove('header-library');
  headerBg.classList.add('header-home');
  homeBtn.classList.add('header__nav--link--current');
  libraryBtn.classList.remove('header__nav--link--current');
}

// Смена фона хедера для LIBRARY
function libraryBGI() {
  headerBg.classList.remove('header-home');
  headerBg.classList.add('header-library');
  homeBtn.classList.remove('header__nav--link--current');
  libraryBtn.classList.add('header__nav--link--current');
}
