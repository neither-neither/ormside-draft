// Radio Button
const radio = document.querySelector("#listen");
const radioBtn = document.querySelector("#radio-btn");

radioBtn.addEventListener("click", () => {
  if (radioBtn.value === "on") {
    radio.pause();
    radioBtn.innerHTML =
      "<i class='fas fa-play'></i><p class='fnt-md pad-left-std' id='radio-btn-text'>Play</p>";
    radioBtn.value = "off";
  } else {
    radio.play();
    radioBtn.innerHTML =
      "<i class='fas fa-pause'></i><p class='fnt-md pad-left-std' id='radio-btn-text'>Pause</p>";
    radioBtn.value = "on";
  }
});
