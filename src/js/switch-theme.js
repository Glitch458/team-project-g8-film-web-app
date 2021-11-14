const switchIcon = document.querySelector('.header__theme-switcher');
const filmTitle = document.querySelector('.film-title');
switchIcon.addEventListener('click', switchTheme);

let theme = 'LIGTH';
console.log(filmTitle);
function switchTheme () {
    
    if (theme === 'LIGTH') {
        theme = 'DARK';
        darkSwitcher();
        // filmTitle.classList.remove('film-title-light');
        // filmTitle.classList.add('film-title-dark');
        document.body.style.background = "#1a0202";
        
    } else {
        theme = 'LIGTH';
        lightSwitcher();
        document.body.style.background = "#ffffff";
        
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
