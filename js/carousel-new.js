const projects = document.querySelector(".carousel-container").children;

let i = 1;

// move carousel right
const projectNavRight = document.querySelector("#right");
projectNavRight.addEventListener("click", () => {
  if (i === projects.length) {
    i = 0;
  }
  i++;
  projectNavRight.href = `#${i}`;
});

// move carousel left
const projectNavLeft = document.querySelector("#left");
projectNavLeft.addEventListener("click", () => {
  if (i < 0) {
    i = projects.length - 1;
  }
  i--;
  projectNavLeft.href = `#${i}`;
});
