const btnElement = document.querySelector(".btn");
const bodyElement = document.querySelector("body");

function toggleColor() {
  bodyElement.classList.toggle("is--on");

  if (bodyElement.classList.value === "is--on") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}
btnElement.addEventListener("click", toggleColor);
