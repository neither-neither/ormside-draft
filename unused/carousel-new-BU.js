const projects = document.querySelector(".inner-cont").children;

let i = 1;

// move carousel right
const projectNavRight = document.querySelector("#right");
projectNavRight.addEventListener("click", () => {
  if (i === projects.length) {
    i = 0;
  }
  i++;
  projectNavRight.href = `#project-${i}`;
});

// move carousel left
const projectNavLeft = document.querySelector("#left");
projectNavLeft.addEventListener("click", () => {
  if (i < 0) {
    i = projects.length - 1;
  }
  i--;
  projectNavLeft.href = `#project-${i}`;
});

/* set all projects to display none on click and then set the chosen project using i as visible

might need to use a for loop to iteration and set the style to all projects

*/
