import { backdropEl, openModal, closeModal } from './backdrop';

const contributorsLinkEl = document.querySelector('.footer__description-link');

contributorsLinkEl.addEventListener('click', openContributorsModal);

function openContributorsModal(evt) {
  evt.preventDefault();
  openModal();
  window.addEventListener('keydown', closeContributorsModalByEsc);
  backdropEl.addEventListener('click', closeContributorsModalByClick);
}

function closeContributorsModalByEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', closeContributorsModalByEsc);
  }
}

function closeContributorsModalByClick(evt) {
  if (evt.target === backdropEl) {
    closeModal();
    backdropEl.removeEventListener('click', closeContributorsModalByClick);
  }
}
