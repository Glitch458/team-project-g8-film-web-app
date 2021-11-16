const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyClass = document.querySelector('body');
const switchIcon = document.querySelector('.header__theme-switcher');
const mainFilmCards = document.querySelector('.js-gallery');
switchIcon.addEventListener('click', switchTheme);

let theme = 'LIGTH';
bodyClass.classList.add(Theme.LIGHT);
mainFilmCards.classList.add('cards--light');

function switchTheme() {
  if (theme === 'LIGTH') {
    theme = 'DARK';
    darkSwitcher();
    darkCard();
    bodyClass.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    theme = 'LIGTH';
    lightSwitcher();
    lightCard();
    bodyClass.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

function darkSwitcher() {
  switchIcon.classList.remove('ligth');
  switchIcon.classList.add('dark');
}
function lightSwitcher() {
  switchIcon.classList.remove('dark');
  switchIcon.classList.add('ligth');
}

function lightCard() {
  mainFilmCards.classList.remove('cards--dark');
  mainFilmCards.classList.add('cards--light');
}

function darkCard() {
  mainFilmCards.classList.remove('cards--light');
  mainFilmCards.classList.add('cards--dark');
}
