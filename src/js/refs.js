export default {
  // add-movie-list
  movieList: document.querySelector('.movie-list'),
  // backdrop
  backdropEl: document.querySelector('.backdrop'),
  // contributors
  contributorsLinkEl: document.querySelector('.footer__description-link'),
  // gallery
  gallery: document.querySelector('.js-gallery'), //Дубль, один и тот же элемент
  search: document.querySelector('.header__form-input'),
  pagination: document.querySelector('.pagination'),
  iconSearch: document.querySelector('.header__icon--search'),
  // modal
  movieCardContainer: document.querySelector('.modal-movie-container'),
  // 
  galleryMovies: document.querySelector('.gallery'),//Дубль, один и тот же элемент
  // my-library-btn
  headerLabel: document.querySelector('.header__label'),
  myLibraryBtn: document.querySelector('.my-library__btns'),
  // navigation
  homeBtn: document.querySelector('[data-action="link-home"]'),
  libraryBtn: document.querySelector('[data-action="link-lib"]'),
  logoEl: document.querySelector('.header__icon--logo'),
  logoBtn: document.querySelector('.header__logo--btn'),
  parentEl: document.querySelector('.header__menu'),
  headerBg: document.querySelector('.header'),
  // notifications
  searchError: document.querySelector('.info-notify'),
  emptyGalleryText: document.querySelector('.info-notify-text'),
  emptyGalleryImg: document.querySelector('.info-notify'),
  // pagination
  dec: document.querySelector('#dec'),
  inc: document.querySelector('#inc'),
  page_numbers: document.querySelectorAll('.pxag_tet'),
  page_items: document.querySelectorAll('.pag_item'),
  pageMax: document.querySelector('.last_page'),
  dotsLeft: document.querySelector('[data-dots="left"]'),
  dotsRigth: document.querySelector('[data-dots="rigth"]'),
  middleBtn: document.querySelector('#l3'),
  btn4: document.querySelector('#l4'),
  btn2: document.querySelector('#l2'),
  pageFirst: document.querySelector('.first_page'),
  // spinner
  spinRef: document.querySelector('.js-spinner'),
  // switch-theme
  bodyClass: document.querySelector('body'),
  switchIcon: document.querySelector('.header__theme-switcher'),
  mainFilmCards: document.querySelector('.js-gallery'),//Дубль, один и тот же элемент
};