import refs from './refs'

function startSpin() {
  refs.spinRef.classList.add('is-open');
}

function stopSpin() {
  setTimeout(function () {
    refs.spinRef.classList.remove('is-open');
  }, 300);
}

export { startSpin, stopSpin };
