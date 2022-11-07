let button = document.querySelector("button");
let hour = document.getElementById("hour");
let second = document.getElementById("seconds");

// This is the function to convert hours to seconds
function howManySeconds() {
  second.innerHTML = 3600 * hour.value;
}
// This is the function for the enter key
hour.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    button.click();
  }
});
button.addEventListener('click', howManySeconds);

