const menuBtn = document.querySelector(".menuBtn");
const exit = document.querySelector(".exit");

let t1 = gsap.timeline({ paused: true });
t1.to(".menu", {
  opacity: 1,
  duration: 1,
  top: 0,
  right: 0,
  ease: Power2.easeInOut,
});
t1.to(
  ".navli",
  {
    opacity: 1,
    duration: 0.3,
    stagger: 0.3,
    marginTop: 0,
    ease: Power2.easeInOut,
  },
  ">-0.5"
);

menuBtn.addEventListener("click", () => {
  t1.play().timeScale(1.3);
});

exit.addEventListener("click", () => {
  t1.timeScale(3);
  t1.reverse();
});
