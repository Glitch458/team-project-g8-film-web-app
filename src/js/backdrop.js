export const backdropEl = document.querySelector('.backdrop');

export function openModal() {
  backdropEl.classList.remove('is-hidden');
}

export function closeModal() {
  backdropEl.classList.add('is-hidden');
}
