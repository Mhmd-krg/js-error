let startbox = document.querySelector(".start-box");
let inputcounter = document.querySelector("#input-counter");
let startcounter = document.querySelector("#start-counter");
let errorElement = document.querySelector("#error-message");
let timerCircle = document.querySelector(".c100");
startcounter.addEventListener("click", function (e) {
  let seconds = parseInt(inputcounter.value);
  if (isNaN(seconds)) {
    errorElement.innerHTML = " زمان را به درستی وارد کنید";
    errorElement.classList.add("active");
    return;
  }

  errorElement.classList.remove("active");
  timerCircle.style.display = "block";
});
