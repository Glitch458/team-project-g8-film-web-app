const headerLabel = document.querySelector('.header__label');
const myLibraryBtn = document.querySelector('.my-library__btns');
const add = document.querySelector('[data-action="link-lib"]');
const remove = document.querySelector('[data-action="link-home"]');

add.addEventListener('click', () => {
    headerLabel.classList.add('visually-hidden');
     myLibraryBtn.classList.remove('visually-hidden');

})
remove.addEventListener('click', () => {
    myLibraryBtn.classList.add('visually-hidden');
    headerLabel.classList.remove('visually-hidden');

})

