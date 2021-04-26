const tracklistLink = document.querySelector(".tracklist-link");

tracklistLink.addEventListener("click", () => {
  document.querySelector(".tracklist").style.display = "block";
  document.querySelector(".tracklist-link").innerText = "Tracklist:";
});

console.log("hello");
