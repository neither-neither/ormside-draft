const projects = [
  {
    title: "Tiesto",
    image:
      "https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcyMzQwMjI0NDAyMTM5MDc2/tiesto.jpg",
    text: `If you didn't already know, Tijs Michiel Verwest, better known as Tiesto, is a Dutch DJ and producer that has been in the game for over 20 years. He was the first DJ in history to play at the Olympics and has made an insane amount of achievements that don't really need to be listed here. No matter who you are, you know Tiesto, or at least in name. Hell, my mom even knows about Tiesto! So what is it about Tiesto that brought him to the top and kept him there? Well there's a few things, and they are certain aspects that every major DJ or artist needs in order to stay in the spotlight.`,
    link: "paul-purgas.html",
  },
  {
    title: "Judge Jules",
    image:
      "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F77b12b44-f795-11e7-af66-6e848ca65d7a.jpg?crop=2250%2C1500%2C0%2C0",
    text: `He’s one DJ that has been there, done it, and done it all again. For almost three decades Judge Jules has led the way in the world of dance music. Since kicking off his career behind the decks in 1987, Judge Jules has ticked every box, as a DJ, producer, promoter, A&R, radio presenter, taste-maker and, more recently, a music specialist lawyer. Widley recognised for influencing an entire generation with residencies on both Kiss FM and BBC Radio 1, to this day the Judge continues to be on the playlists of millions with his weekly radio show The Global Warm Up, which notches up 750,000 downloads every week via his podcast and is broadcast on over 80 stations around the world.`,
    link: "http://www.judgejules.net/",
  },
  {
    title: "Lisa Lashes",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvivamanchester.co.uk%2Fwp-content%2Fuploads%2F2015%2F08%2FLisa-Lashes-22-of-23.jpg&f=1&nofb=1",
    text: `Lisa Lashes first emerged as a DJ in 1992 then later in 1995, she had organised to perform at a friend's boat party on the River Severn. It was here the agreement to meet up with Sundissential promoter Paul Madan or 'Madders' she got offered the second official advertisement to continue residency at the Sunday club in Birmingham.[3] Tidy Boys needed Lisa Lashes to help steal Tidy Trax by fronting the relaunch studio project's "The Tidy Girls EP" alongside Rachel Auburn, Lisa Pin-Up and Anne Savage. Her single release, "Unbelievable" (2000) spent one week at No. 63 in the UK Singles Chart in July that year. In October 2003, "What Can You Do 4 Me?" peaked at number 52 in the same chart`,
    link: "http://www.djlisalashes.com/",
  },
  {
    title: "Tony De Vit",
    image:
      "https://www.frozenuk.com/wp-content/uploads/2018/07/Tony-devit5.jpg",
    text: `Tony de Vit began DJing at the age of 17, as a wedding DJ in 1976 playing at local pubs in his home town of Kidderminster, followed in his early 20s, by his first residency at the 'Nightingale' in Birmingham on a Monday night where he played pop and Hi-NRG. He would often have to sweep floors and empty ashtrays after the club had closed.[15] In a relatively short space of time de Vit, through his talent and the diversity of his music, helped establish the 'Nightingale' as a respected club. During the early 1980s, he worked at Wolverhampton's Beacon Radio, playing club tracks during a regular late-night slot on the 1922 show hosted by Mike Baker of Smooth FM).`,
    link: "https://en.wikipedia.org/wiki/Tony_De_Vit",
  },
];

const projectTitle = document.querySelector("#project-title");
const projectImg = document.querySelector(".project-image");
const projectText = document.querySelector(".project-text");
const projectLink = document.querySelector("#read-more-link");

// sets initial assets of project section to index 0 of projects object
let i = 0;
projectTitle.innerText = projects[i].title;
projectImg.src = projects[i].image;
projectText.innerText = projects[i].text;
projectLink.href = projects[i].link;

// move carousel right
const projectNavRight = document.querySelector("#project-nav-btn-right");
projectNavRight.addEventListener("click", () => {
  i++;
  if (i === projects.length) {
    i = 0;
  }
  projectTitle.innerText = projects[i].title;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
  projectLink.href = projects[i].link;
});

// move carousel left
const projectNavLeft = document.querySelector("#project-nav-btn-left");
projectNavLeft.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = projects.length - 1;
  }
  projectTitle.innerText = projects[i].title;
  projectImg.src = projects[i].image;
  projectText.innerText = projects[i].text;
});
