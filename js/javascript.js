console.log("loaded");

const projects = [
  {
    title: "Romika TV: Valentines",
    date: "Sunday Feb 14th 2021",
    time: "4pm",
    image: "images/projects/romika-valentine.gif",
    linkText: "FB Event",
    linkAddress: "https://www.facebook.com/events/2873655309545556",
    text: `Romika invites you to watch TV all afternoon into night on 14th February. 
    
          Indoors, alone, to celebrate the mystery, tragedy and glamour of love.
           
          International, internationalist, broadcasting from Ormside to the cosmos. Join us on Romika TV 🌹

          With DJs: Nikola Vitković, Vedma, Devica/ACC (Palermo), Candy Sez, Katie Shannon (DJ/LIVE), Somnambulist

          Live sets/performances from: Adam Christensen, CECILIA, Vindicatrix, Sophie Sleigh-Johnson, Clup Alpino (Poland), Franziska Lantz, Sean Colum ( Tokyo), Robert Jack + Federico Lupo, Lucia Udvardyova/Palmovka (Budapest)

          + more TBC

          Twitch link to follow xx`,
  },
  {
    title: "Project Title",
    date: "Project Date",
    time: "Project Time",
    image: "images/radio/meg-woof-800.jpg",
    link: "",
    text: `He’s one DJ that has been there, done it, and done it all again. For almost three decades Judge Jules has led the way in the world of dance music. Since kicking off his career behind the decks in 1987, Judge Jules has ticked every box, as a DJ, producer, promoter, A&R, radio presenter, taste-maker and, more recently, a music specialist lawyer. Widley recognised for influencing an entire generation with residencies on both Kiss FM and BBC Radio 1, to this day the Judge continues to be on the playlists of millions with his weekly radio show The Global Warm Up, which notches up 750,000 downloads every week via his podcast and is broadcast on over 80 stations around the world.`,
  },
];

const projectTitle = document.querySelector("#project-title");
const projectDate = document.querySelector("#project-date");
const projectTime = document.querySelector("#project-time");
const projectImg = document.querySelector("#project-img");
const projectText = document.querySelector("#project-text");
const projectLink = document.querySelector("#project-link");

// sets initial assets of project section to index 0 of projects object
let i = 0;
projectTitle.innerText = projects[i].title;
projectDate.innerText = projects[i].date;
projectTime.innerText = projects[i].time;
projectImg.src = projects[i].image;
projectText.innerText = projects[i].text;
projectLink.href = projects[i].linkAddress;
projectLink.innerText = projects[i].linkText;

// move carousel right
const projectNavRight = document.querySelector("#right");
projectNavRight.addEventListener("click", () => {
  console.log("nav click right");
  i++;
  if (i === projects.length) {
    i = 0;
  }
  projectTitle.innerText = projects[i].title;
  projectDate.innerText = projects[i].date;
  projectTime.innerText = projects[i].time;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
  projectLink.href = projects[i].link;
});

// move carousel left
const projectNavLeft = document.querySelector("#left");
projectNavLeft.addEventListener("click", () => {
  console.log("nav click left");
  i--;
  if (i < 0) {
    i = projects.length - 1;
  }
  projectTitle.innerText = projects[i].title;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
});

/* 
// Radio Button

const audio1 = document.querySelector("#audio1");
const radioBtn = document.querySelector("#radio-btn");

radioBtn.addEventListener("click", () => {
  if (radioBtn.value === "on") {
    console.log(radioBtn.value);
    audio1.pause();
    radioBtn.innerHTML =
      "<i class='fas fa-play radio-logo'></i><p id='radio-btn-text'>Listen Live</p>";
    radioBtn.value = "off";
    console.log(radioBtn.value);
  } else {
    console.log(radioBtn.value);
    audio1.play();
    radioBtn.innerHTML =
      "<i class='fas fa-pause radio-logo'></i><p id='radio-btn-text'>Listen Live</p>";
    radioBtn.value = "on";
    console.log(radioBtn.value);
  }
});
*/
