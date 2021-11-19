import { openModal, closeModal } from './backdrop';
import refs from './refs'

refs.contributorsLinkEl.addEventListener('click', openContributorsModal);

function openContributorsModal(evt) {
  evt.preventDefault();
  openModal();
  window.addEventListener('keydown', closeContributorsModalByEsc);
  refs.backdropEl.addEventListener('click', closeContributorsModalByClick);
}

function closeContributorsModalByEsc(evt) {
  if (evt.key === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', closeContributorsModalByEsc);
    refs.backdropEl.removeEventListener('click', closeContributorsModalByClick);
  }
}

function closeContributorsModalByClick(evt) {
  if (evt.target === refs.backdropEl) {
    closeModal();
    window.removeEventListener('keydown', closeContributorsModalByEsc);
    refs.backdropEl.removeEventListener('click', closeContributorsModalByClick);
  }
}
