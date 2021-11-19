import { makeLibraryGallery, renderLibraryGallery } from './gallery';

const watchedBtn = document.querySelector('.js-btn-watched');
const queueBtn = document.querySelector('.js-btn-queue');

// let movieLocalStorage = [];
// movieLocalStorage = [438631, 522402];
// let queueLs = [580489];
// localStorage.setItem('watch', JSON.stringify(movieLocalStorage))
// localStorage.setItem('queue', JSON.stringify(queueLs))

watchedBtn.addEventListener('click', getWatchedMovies);
queueBtn.addEventListener('click', getQueueMovies);

function getWatchedMovies() {  
    let watchedMovies = localStorage.getItem('watched');
    let watchedMoviesLs = JSON.parse(watchedMovies);
    renderLibraryGallery(watchedMoviesLs)
}

function getQueueMovies() {
    let queueMovies = localStorage.getItem('queue');
    let queueMoviesLs = JSON.parse(queueMovies);
    renderLibraryGallery(queueMoviesLs)

}

export function libraryMovies() {
    let watchedMovies = localStorage.getItem('watched');
    let watchedMoviesLs = JSON.parse(watchedMovies);
    let queueMovies = localStorage.getItem('queue');
    let queueMoviesLs = JSON.parse(queueMovies);

    const libraryMovieList = [...watchedMoviesLs, ...queueMoviesLs]
    renderLibraryGallery(libraryMovieList);
}

