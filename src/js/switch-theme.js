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
    switcher();
    changeCard();
    refs.bodyClass.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    theme = 'LIGTH';
    switcher();
    changeCard();
    refs.bodyClass.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

function switcher() {
  refs.switchIcon.classList.toggle('ligth');
  refs.switchIcon.classList.toggle('dark');
}

function changeCard() {
  refs.mainFilmCards.classList.toggle('cards--dark');
  refs.mainFilmCards.classList.toggle('cards--light');
}
