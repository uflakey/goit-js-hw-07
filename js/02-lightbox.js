import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const containerGalary = document.querySelector(".gallery");

containerGalary.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}

const modal = new SimpleLightbox(".gallery a", {});
