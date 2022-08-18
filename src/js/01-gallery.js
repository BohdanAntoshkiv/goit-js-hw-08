// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const items = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    )
    .join('');

gallery.insertAdjacentHTML('afterbegin', items);


new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

