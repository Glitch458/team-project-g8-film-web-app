import refs from './refs'

refs.libraryBtn.addEventListener('click', () => {
    refs.headerLabel.classList.add('visually-hidden');
    refs.myLibraryBtn.classList.remove('visually-hidden');

})

refs.homeBtn.addEventListener('click', () => {
    refs.myLibraryBtn.classList.add('visually-hidden');
    refs.headerLabel.classList.remove('visually-hidden');

})

