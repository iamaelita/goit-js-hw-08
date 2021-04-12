import galleryItems from '../gallery-items.js';

// Разбей задание на несколько подзадач:
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

// Ссылки на элементы
const refs = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  lightboxCloseBtn: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
};