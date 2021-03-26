// flashes div that holds the carousel content
const carouselTransition = () => {
  $(".flash-wrapper").fadeOut(0).fadeIn(500);
};

const projects = document.querySelector(".flash-wrapper").children;
let i = 0;

// move carousel right
const projectNavRight = document.querySelector("#right");
projectNavRight.addEventListener("click", () => {
  carouselTransition();
  if (i === projects.length - 1) {
    i = 0 - 1;
  }
  i++;
  // for loop that iterates over all projects and resets classes
  for (let k = 0; k < projects.length; k++) {
    projects[k].classList.remove("grid-50x50");
    projects[k].classList.add("hide");
  }
  // classes added and removed to show desired project
  projects[i].classList.add("grid-50x50");
  projects[i].classList.remove("hide");
});

// move carousel left
const projectNavLeft = document.querySelector("#left");
projectNavLeft.addEventListener("click", () => {
  carouselTransition();
  console.log("initial value of i", i);
  if (i === 0) {
    i = projects.length;
  }
  i--;
  // for loop that iterates over all projects and resets classes
  for (let k = 0; k < projects.length; k++) {
    projects[k].classList.remove("grid-50x50");
    projects[k].classList.add("hide");
  }
  // classes added and removed to show desired project
  projects[i].classList.add("grid-50x50");
  projects[i].classList.remove("hide");
});

////////////////////////////////////////////////////////////

const radioTransition = () => {
  $(".radio-wrapper").fadeOut(0).fadeIn(500);
};

const radioArchive = document.querySelector(".radio-wrapper").children;
const feb14th = document.querySelector("#feb-14th");
const march22nd = document.querySelector("#march-22nd");
const march8th = document.querySelector("#march-8th");

document.querySelector("#feb-14th-arc").addEventListener("click", () => {
  radioTransition();
  feb14th.classList.remove("hide");
  feb14th.classList.add("grid-50x50");
  march22nd.classList.remove("grid-50x50");
  march22nd.classList.add("hide");
  march8th.classList.remove("grid-50x50");
  march8th.classList.add("hide");
});

document.querySelector("#mar-8th-arc").addEventListener("click", () => {
  radioTransition();
  feb14th.classList.add("hide");
  feb14th.classList.remove("grid-50x50");
  march8th.classList.remove("hide");
  march8th.classList.add("grid-50x50");
  march22nd.classList.remove("grid-50x50");
  march22nd.classList.add("hide");
});

document.querySelector("#mar-22nd-arc").addEventListener("click", () => {
  radioTransition();
  feb14th.classList.add("hide");
  feb14th.classList.remove("grid-50x50");
  march8th.classList.add("hide");
  march8th.classList.remove("grid-50x50");
  march22nd.classList.add("grid-50x50");
  march22nd.classList.remove("hide");
});
