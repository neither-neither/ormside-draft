const projects = [
  {
    title: "Uprising: South London Industrial Map",
    date: "Spring 2021",
    time: "",
    image: "images/projects/paul-purgas.jpg",
    link: "",
    text: `Map & audio guide exploring the history of Industrial music in South London during the 1980's, uncovering the network of venues and squats that formed the foundation of the scene in the area, and the music that beat a defiant soundtrack against an era of cultural oppression, economic decline and aggressive corporate political organisation.

           A research project by Paul Purgas.`,
  },
  {
    title: "5 GATE TEMPLE SUMMER RECITAL",
    date: "Spring 2021",
    time: "",
    image: "images/projects/5-gate-temple.jpg",
    link:
      "<a id='project-link' class='section-link' href='https://5gatetemple.bandcamp.com/' target='_blank'>5 Gate Temple on Bandcamp</a>",
    text: `Live manifestation of a new 5 Gate Temple release. 

    More information soon
    `,
  },
  {
    title: "Romika TV: Valentines",
    date: "Sunday Feb 14th 2021",
    time: "4pm",
    image: "images/projects/romika-valentine.gif",
    link:
      "<a id='project-link' class='section-link' href='https://www.twitch.tv/romikatv' target='_blank'>Watch live on Twitch here from 4pm UK / 5pm CET</a>",
    text: `Romika invites you to watch TV all afternoon into night on 14th February. 
    
          Indoors, alone, to celebrate the mystery, tragedy and glamour of love.
           
          International, internationalist, broadcasting from Ormside to the cosmos. Join us on Romika TV 🌹

          With DJs: Nikola Vitković, Vedma, Devica/ACC (Palermo), Candy Sez, Katie Shannon (DJ/LIVE), Somnambulist

          Live sets/performances from: Adam Christensen, CECILIA, Vindicatrix, Sophie Sleigh-Johnson, Clup Alpino (Poland), Franziska Lantz, Sean Colum ( Tokyo), Robert Jack + Federico Lupo, Lucia Udvardyova/Palmovka (Budapest) + more TBC`,
  },
];

const projectTitle = document.querySelector("#project-title");
const projectDate = document.querySelector("#project-date");
const projectTime = document.querySelector("#project-time");
const projectImg = document.querySelector("#project-img");
const projectText = document.querySelector("#project-text");
const projectLink = document.querySelector("#proj-link");

// sets initial assets of project section to index 0 of projects object
let i = 0;
projectTitle.innerText = projects[i].title;
projectDate.innerText = projects[i].date;
projectTime.innerText = projects[i].time;
projectImg.src = projects[i].image;
projectText.innerText = projects[i].text;
projectLink.innerHTML = projects[i].link;

// move carousel right
const projectNavRight = document.querySelector("#right");
projectNavRight.addEventListener("click", () => {
  i++;
  if (i === projects.length) {
    i = 0;
  }
  projectTitle.innerText = projects[i].title;
  projectDate.innerText = projects[i].date;
  projectTime.innerText = projects[i].time;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
  projectLink.innerHTML = projects[i].link;
});

// move carousel left
const projectNavLeft = document.querySelector("#left");
projectNavLeft.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = projects.length - 1;
  }
  projectTitle.innerText = projects[i].title;
  projectDate.innerText = projects[i].date;
  projectTime.innerText = projects[i].time;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
  projectLink.innerHTML = projects[i].link;
});

// Radio Button
const radio = document.querySelector("#listen");
const radioBtn = document.querySelector("#radio-btn");

radioBtn.addEventListener("click", () => {
  if (radioBtn.value === "on") {
    radio.pause();
    radioBtn.innerHTML =
      "<i class='fas fa-play'></i><p id='radio-btn-text'>Play</p>";
    radioBtn.value = "off";
  } else {
    radio.play();
    radioBtn.innerHTML =
      "<i class='fas fa-pause'></i><p id='radio-btn-text'>Pause</p>";
    radioBtn.value = "on";
  }
});
