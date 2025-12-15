const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  if (age >= 13 && age <= 19 ) {
  output.textContent = "you are a teen age.";
}else if (age < 13) {
  output.textContent = "you are still a baby 😉😁.";
}
else {
  output.textContent = "you are not a teen age .";

}
});
