gsap.registerPlugin(ScrollTrigger);

const MainContainer10 = document.querySelector(".main_container10");
const defs = document.querySelectorAll(".main_container10");

defs.forEach((section) => {
  gsap.fromTo(
    section.children,
    {
      y: "+=1000",
    },
    {
      y: 0,
      stagger: 1,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: MainContainer10,
        pin: true,
        scrub: 1.5,
        end: "2000vh",
      },
    }
  );
});

const MainContainer11 = document.querySelector(".main_container11");
const deffs = document.querySelectorAll(".main_container11");

deffs.forEach((section) => {
  gsap.fromTo(
    section.children,
    {
      y: "+=1000",
    },
    {
      y: 0,
      stagger: 0.5,
      duration: 1,
      ease: "pulse",
      scrollTrigger: {
        trigger: MainContainer11,
        pin: true,
        scrub: 1.5,
        end: "2000vh",
      },
    }
  );
});

const MainContainer13 = document.querySelector(".main_container13");
const Main_div = document.querySelector(".main_div");
const Main_div_sec = document.querySelector(".main_div_sec");

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: MainContainer13,
    pin: true,
    scrub: 1.5,
    end: "2000vh",
  },
});

timeline.fromTo(
  Main_div.children,
  {
    y: "+=1000",
  },
  {
    y: 0,
    stagger: 0.5,
    duration: 1,
    ease: "pulse",
  }
);

timeline.fromTo(
  Main_div_sec.children,
  {
    y: "-=1000",
  },
  {
    y: 0,
    stagger: 0.5,
    duration: 1,
    ease: "pulse",
  }
);
