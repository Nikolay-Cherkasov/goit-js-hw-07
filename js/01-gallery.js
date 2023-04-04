import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function galleryMarkup(array) {
  array.map(({ preview, original, description }) => {
    const markup = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
  });
}

galleryMarkup(galleryItems);

galleryRef.addEventListener('click', selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImage = event.target.dataset.source;

  const modal = basicLightbox.create(`
	<img src="${largeImage}" width="1200" height="800"/>
`);
  modal.show();

  document.addEventListener('keydown', closeModal);

  function closeModal(event) {
    if (event.key === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', closeModal);
    }
    console.log(event);
  }
}
