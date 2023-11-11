import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal__text");
splitTypes.forEach((char, idx) => {
  const text = new SplitType(char, { types: "chars" });
  console.log(text);

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    // test animations
    // y: 10,
    // x: 100,
    // opacity: 0,
    // stagger: 0.1,
    // desired animation
    opacity: 0.1,
    stagger: 0.1,
  });
});
