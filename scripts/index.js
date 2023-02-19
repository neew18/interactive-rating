let ratingBox = document.querySelector(".rating-container");
let thankYouBox = document.querySelector(".thank-you-box");
let buttonElement = document.getElementById("submit-button");
let thankYouRating = document.getElementById("thankyou-rating");
let ratingButtons = document.querySelectorAll(".rating-num");
let againButton = document.getElementById("submit-again-button");

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  let rated = document.getElementById("thankyou-rating");
  if (/[12345]/g.test(rated.textContent)) {
    ratingBox.style.display = "none";
    thankYouBox.style.display = "block";
  }
});

againButton.addEventListener("click", (event) => {
  event.preventDefault();
  ratingBox.style.display = "block";
  thankYouBox.style.display = "none";
});

let value;
for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", (event) => {
    event.preventDefault();
    thankYouRating.innerHTML = ratingButtons[i].textContent;
    ratingButtons[i].classList.add("active");
    if (value === undefined) {
      //first time pressing button, set the value to submitted index
      value = i;
    } else if (i !== value) {
      //if the user pressed another button, remove active state
      ratingButtons[value].classList.remove("active");
    }
    value = i;
  });
}
