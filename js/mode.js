const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const toggleModeBtn = () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
};

darkBtn.addEventListener("click", toggleModeBtn);
lightBtn.addEventListener("click", toggleModeBtn);
