console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.setAttribute("onclick", "renderStars(" + i + ")");
    if (i <= filledStars) {
      star.src = `assets/star-filled.svg`; // filled star
    } else {
      star.src = `assets/star-empty.svg`; // empty star
    }
    starContainer.appendChild(star);

  }
 } // for loop ends here 
 renderStars(0);

 star.addEventListener("click", );
//   // --^-- write or modify code above this line --^--


