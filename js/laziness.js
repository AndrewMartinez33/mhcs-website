window.addEventListener('scroll', laziness);


function laziness() {
  const elements = document.querySelectorAll('.lazy');
  elements.forEach(element => {
    // return object with the height and width of the element, along with its distance from the top, bottom, right, and left.
    const distances = element.getBoundingClientRect();
    const imagePath = element.getAttribute('data-src');

    //if the element is within the boundaries of the viewport
    if (distances.top >= 0 &&
      distances.top < (window.innerHeight || document.documentElement.clientHeight) &&
      distances.left >= 0 &&
      distances.left < (window.innerWidth || document.documentElement.clientWidth)) {
      element.setAttribute('src', imagePath);
    }
  })
}