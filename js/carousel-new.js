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
