import refs from './refs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switchIcon.addEventListener('click', switchTheme);

let theme = 'LIGTH';
refs.bodyClass.classList.add(Theme.LIGHT);
refs.mainFilmCards.classList.add('cards--light');

function switchTheme() {
  if (theme === 'LIGTH') {
    theme = 'DARK';
    darkSwitcher();
    darkCard();
    refs.bodyClass.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    theme = 'LIGTH';
    lightSwitcher();
    lightCard();
    refs.bodyClass.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

function darkSwitcher() {
  refs.switchIcon.classList.remove('ligth');
  refs.switchIcon.classList.add('dark');
}
function lightSwitcher() {
  refs.switchIcon.classList.remove('dark');
  refs.switchIcon.classList.add('ligth');
}

function lightCard() {
  refs.mainFilmCards.classList.remove('cards--dark');
  refs.mainFilmCards.classList.add('cards--light');
}

function darkCard() {
  refs.mainFilmCards.classList.remove('cards--light');
  refs.mainFilmCards.classList.add('cards--dark');
}
