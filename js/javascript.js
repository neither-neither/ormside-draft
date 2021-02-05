const projects = [
  {
    title: "Romika TV: Valentines",
    date: "Sunday Feb 14th 2021",
    time: "4pm",
    image: "images/romika-valentine.gif",
    linkText: "FB Event",
    linkAddress: "https://www.facebook.com/events/2873655309545556/",
    text: `Romika invites you to watch TV all afternoon into night on 14th February. 
    
          Indoors, alone, to celebrate the mystery, tragedy and glamour of love.`,
  },
  {
    title: "Judge Jules",
    date: "March 12th 2021",
    time: "7pm > 3am Live",
    image: "images/jules.jpg",
    link: "paul-purgas.html",
    text: `He’s one DJ that has been there, done it, and done it all again. For almost three decades Judge Jules has led the way in the world of dance music. Since kicking off his career behind the decks in 1987, Judge Jules has ticked every box, as a DJ, producer, promoter, A&R, radio presenter, taste-maker and, more recently, a music specialist lawyer. Widley recognised for influencing an entire generation with residencies on both Kiss FM and BBC Radio 1, to this day the Judge continues to be on the playlists of millions with his weekly radio show The Global Warm Up, which notches up 750,000 downloads every week via his podcast and is broadcast on over 80 stations around the world.`,
  },
  {
    title: "Lisa Lashes",
    date: "April 3rd 2021",
    time: "10pm > 11pm Live",
    image: "images/lisa.jpg",
    link: "paul-purgas.html",
    text: `Lisa Lashes first emerged as a DJ in 1992 then later in 1995, she had organised to perform at a friend's boat party on the River Severn. It was here the agreement to meet up with Sundissential promoter Paul Madan or 'Madders' she got offered the second official advertisement to continue residency at the Sunday club in Birmingham.[3] Tidy Boys needed Lisa Lashes to help steal Tidy Trax by fronting the relaunch studio project's "The Tidy Girls EP" alongside Rachel Auburn, Lisa Pin-Up and Anne Savage. Her single release, "Unbelievable" (2000) spent one week at No. 63 in the UK Singles Chart in July that year. In October 2003, "What Can You Do 4 Me?" peaked at number 52 in the same chart`,
  },
  {
    title: "Tony De Vit",
    image: "images/tony.png",
    date: "May 19th 2021",
    time: "6am > 5pm Live",
    image: "images/tony.jpg",
    link: "paul-purgas.html",
    text: `Tony de Vit began DJing at the age of 17, as a wedding DJ in 1976 playing at local pubs in his home town of Kidderminster, followed in his early 20s, by his first residency at the 'Nightingale' in Birmingham on a Monday night where he played pop and Hi-NRG. He would often have to sweep floors and empty ashtrays after the club had closed.[15] In a relatively short space of time de Vit, through his talent and the diversity of his music, helped establish the 'Nightingale' as a respected club. During the early 1980s, he worked at Wolverhampton's Beacon Radio, playing club tracks during a regular late-night slot on the 1922 show hosted by Mike Baker of Smooth FM).`,
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
const projectNavRight = document.querySelector("#chevron-right");
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
  projectLink.href = projects[i].link;
});

// move carousel left
const projectNavLeft = document.querySelector("#chevron-left");
projectNavLeft.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = projects.length - 1;
  }
  projectTitle.innerText = projects[i].title;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
});

/* Radio Button

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
