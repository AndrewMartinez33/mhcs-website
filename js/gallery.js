function gallery(photosArray) {
  let photos = photosArray;
  const imagesContainer = document.querySelector('#photos');

  photos.forEach(element => {
    const img = document.createElement('img');
    img.setAttribute('class', 'lazy');
    img.setAttribute('src', '../images/gallery-images/lazy-background.svg');
    img.setAttribute('data-src', `https://drewskidev.com/admin${element.path}`);
    img.setAttribute('alt', `${element.meta.asset}`)
    imagesContainer.appendChild(img);
  });

}

fetch('https://www.admin.drewskidev.com/api/collections/get/GalleryMyHCS?token=b209786fa3fcc9a01b23f6e341845c')
  .then(res => res.json())
  .then(res => gallery(res.entries[0].MyHCSGallery));




/* <img class="lazy" src="../images/favicons/ms-icon-150x150.png" data-src="../images/gallery-images/gallery-image-1.jpg" alt="Woman with brunnette hair and an up-do hairstyle" /> */