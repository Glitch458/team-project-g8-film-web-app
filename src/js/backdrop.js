import refs from './refs'

function openModal() {
  refs.backdropEl.classList.remove('is-hidden');
}

function closeModal() {
  refs.backdropEl.classList.add('is-hidden');
}

export {
  openModal,
  closeModal,
}