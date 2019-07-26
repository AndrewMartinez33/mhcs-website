function gallery(photosArray) {
  let photos = photosArray;
  const imagesContainer = document.querySelector("#photos");

  photos.forEach(element => {
    const img = document.createElement("img");
    img.setAttribute("class", "lazy");
    img.setAttribute("src", "../images/gallery-images/lazy-background.svg");
    img.setAttribute("data-src", `https://drewskidev.com/admin${element.path}`);
    img.setAttribute("alt", `${element.meta.asset}`);
    imagesContainer.appendChild(img);
  });
}

fetch(
  "https://www.admin.drewskidev.com/api/collections/get/GalleryMyHCS?token=894a9d878341a1d354f1b8682343bf"
)
  .then(res => res.json())
  .then(res => gallery(res.entries[0].GalleryMyHCS));
