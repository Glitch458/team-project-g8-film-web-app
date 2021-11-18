import refs from './refs'

// -----  notifications
function renderInfoMsg() {
  refs.searchError.classList.remove('is-hidden');
  setTimeout(() => refs.searchError.classList.add('is-hidden'), 2500);
}

function renderEmptyGalleryMsg(text) {
  refs.emptyGalleryText.textContent = `${text}`;
  refs.emptyGalleryImg.classList.remove('is-hidden');
}

function hideInfoImg() {
  refs.emptyGalleryImg.classList.add('is-hidden');
}

export { renderInfoMsg, hideInfoImg, renderEmptyGalleryMsg };
