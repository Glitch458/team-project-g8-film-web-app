const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyClass = document.querySelector('body');
const switchIcon = document.querySelector('.header__theme-switcher');
const filmTitle = document.querySelector('#film-title');
switchIcon.addEventListener('click', switchTheme);

let theme = 'LIGTH';
bodyClass.classList.add(Theme.LIGHT);

function switchTheme () {
    
    if (theme === 'LIGTH') {
        theme = 'DARK';
        darkSwitcher();
        bodyClass.classList.replace(Theme.LIGHT, Theme.DARK);
        
    } else {
        theme = 'LIGTH';
        lightSwitcher();
        bodyClass.classList.replace(Theme.DARK, Theme.LIGHT);
    }
};

function darkSwitcher() {
    switchIcon.classList.remove('ligth');
    switchIcon.classList.add('dark');
};
function lightSwitcher() {
    switchIcon.classList.remove('dark');
    switchIcon.classList.add('ligth');
};
