const homeBtn = document.querySelector('[data-action="link-home"]');
const libraryBtn = document.querySelector('[data-action="link-lib"]');
const headerBg = document.querySelector('.header');

homeBtn.addEventListener('click', homeBGI);
libraryBtn.addEventListener('click', libraryBGI);

function homeBGI() {
    headerBg.classList.remove('header-library');
    headerBg.classList.add('header-home');
    homeBtn.classList.add('header__nav--link--current');
    libraryBtn.classList.remove('header__nav--link--current');
};

function libraryBGI() {
    headerBg.classList.remove('header-home');
    headerBg.classList.add('header-library');
    homeBtn.classList.remove('header__nav--link--current');
    libraryBtn.classList.add('header__nav--link--current');
};

