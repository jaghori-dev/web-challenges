console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(star) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
for (let i = 1; i <= star; i++){
  const img = document.createElement("img")
  img.src = `assets/star-empty.svg`
  starContainer.append(img)
}
  // --^-- write or modify code above this line --^--
}

renderStars(2);
