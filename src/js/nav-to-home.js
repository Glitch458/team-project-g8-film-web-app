import { createPopularMoviesGallery, renderLibraryGallery } from './gallery';

const homeEl = document.querySelector('#link-home');
const logoEl = document.querySelector('.header__icon--logo');
const parentEl = document.querySelector('.header__menu');

parentEl.addEventListener('click', e => {
  if (e.target === logoEl || e.target === homeEl) {
    createPopularMoviesGallery();
  }

  return;
});
