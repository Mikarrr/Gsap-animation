gsap.registerPlugin(ScrollTrigger);

//gsap.to(".square", { x: 800 });

//gsap.set(".square", { x: 40, backgroundColor: "blue" });

/*gsap.fromTo(
  ".square",
  { x: -400, backgroundColor: "blue", duration: 5 },
  { x: 400, backgroundColor: "red", duration: 5 }
);*/

/*gsap.to(".square", {
  // this is the vars object
  // it contains properties to animate
  x: 200,
  rotation: 360,
  // and special properties
  duration: 2,
});*/

/*gsap.to(".square", {
  rotation: 360,
  x: "10vw",
  xPercent: 400,
  // special properties
  duration: 2, // how long the animation lasts
  repeat: 2, // the number of repeats - this will play 3 times
  yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
});*/

/*gsap.to(".green", {
  rotation: 360,
  scale: 2,
  duration: 1,
  repeatDelay: 1,
});

gsap.to(".purple", {
  rotation: 360,
  scale: 2,
  duration: 1,
  delay: 1, // delay the start of this animation
});*/

/*gsap.to(".green", { rotation: 360, duration: 2, ease: "none" });

gsap.to(".purple", {
  rotation: 360,
  duration: 2,

  ease: "bounce.out",
});*/

/*gsap.to(".square", {
  duration: 1,
  rotation: 360,
  opacity: 1,
  delay: 0.5,
  stagger: {
    each: 0.1,
    //repeat: -1,
  },
  ease: "sine.out",
});

document.querySelectorAll(".square").forEach(function (square) {
  square.addEventListener("click", function () {
    gsap.to(".square", {
      duration: 0.5,
      opacity: 0,
      x: -400,
      stagger: 0.1,
      ease: "back.in",
    });
  });
});*/
