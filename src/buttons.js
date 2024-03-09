const body = document.querySelector("body");

body.addEventListener("click", (event) => {
  if (event.target.classList.contains("tempBtn")) {
    console.log("Button clicked");
  }
});
