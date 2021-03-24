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

// Radio Image Focus - brings focus to radio show image when mouseover the show link

const radioShowOne = document.querySelector(".radio-show-one");
const radioShowTwo = document.querySelector(".radio-show-two");
const radioShowThree = document.querySelector(".radio-show-three");
const radioShowFour = document.querySelector(".radio-show-four");

const radioImg = document.querySelector(".radio-grid").children;

radioShowOne.addEventListener("mouseover", () => {
  opLow(0);
});

radioShowOne.addEventListener("mouseleave", () => {
  opFull();
});

radioShowTwo.addEventListener("mouseover", () => {
  opLow(1);
});

radioShowTwo.addEventListener("mouseleave", () => {
  opFull();
});

radioShowThree.addEventListener("mouseover", () => {
  opLow(2);
});

radioShowThree.addEventListener("mouseleave", () => {
  opFull();
});

radioShowFour.addEventListener("mouseover", () => {
  opLow(3);
});

radioShowFour.addEventListener("mouseleave", () => {
  opFull();
});

const opLow = (index) => {
  radioImg[index].style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, .7)";
};

const opFull = () => {
  for (let i = 0; i < radioImg.length; i++) {
    radioImg[i].style.boxShadow = "none";
  }
};

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
