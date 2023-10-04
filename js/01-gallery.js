import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGalary = document.querySelector(".gallery");

containerGalary.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
containerGalary.addEventListener("click", handlerclick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
 <a class="gallery__link" href="${original}">
    <img
     class="gallery__image"
     src="${preview}"
      data-source="${original}"
     alt="${description}"
   />
   </a>
 </li>`
    )
    .join("");
}

function handlerclick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const modal = basicLightbox.create(`
	<div class="modal">
  <img src="${event.target.dataset.source}"width="800" height="600" alt=""/>
</div> 
`);
  modal.show();

  containerGalary.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
}
