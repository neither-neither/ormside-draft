// Radio Button - plays the live audio feed
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

// Info Slideshow

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo("#slideshow");
}, 8000);

function radioHL(show) {
  document.querySelector(`.radio-img-${show}`).style.boxShadow =
    "0px 8px 16px 0px rgba(0, 0, 0, .7)";
}

function radioNL(show) {
  document.querySelector(`.radio-img-${show}`).style.boxShadow = "none";
}
