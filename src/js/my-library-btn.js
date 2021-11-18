import refs from './refs'

refs.add.addEventListener('click', () => {
    refs.headerLabel.classList.add('visually-hidden');
    refs.myLibraryBtn.classList.remove('visually-hidden');

})

refs.remove.addEventListener('click', () => {
    refs.myLibraryBtn.classList.add('visually-hidden');
    refs.headerLabel.classList.remove('visually-hidden');

})

