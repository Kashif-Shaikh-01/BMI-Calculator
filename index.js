//// PROJECT 2  ///

const form = document.querySelector("form");

form.addEventListener("submit", function (x) {
  x.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please type your Height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please type your Weight";
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>You're BMI is ${bmi}</span>`;
  }
});
