import {videoanimation} from './video-animation.js'
import { cursoranimation } from './page4-cursor.js';
// import { page1_cursoranimation } from './page1-cursor';

// Locomotive added for smooth scrolling
function loco() {
  // gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

}

loco()


//Page1

videoanimation()

function textloadinganimation(){
gsap.from('#page1 h1', {
    y: 160,
    opacity:0,
    duration: 1,
    delay: 0.2,
    stagger: 0.2
})

gsap.from('#page1 #video-container', {
    scale: 0.9,
    opacity:0,
    duration: 1,
    delay: 0.8,

})
}

textloadinganimation()


cursoranimation()

// page1_cursoranimation()
export function page1_cursoranimation (){
  var videocon = document.querySelector("#page1")
  var playbtn = document.querySelector("#page1-cursor")
  videocon.addEventListener("mouseenter", function(){
      gsap.to(playbtn,{
          scale: 1,
          opacity: 1
      })
  })


  videocon.addEventListener("mouseleave", function(){
      gsap.to(playbtn,{
          scale: 0,
          opacity: 0
      })
  })


  videocon.addEventListener("mousemove", function(dets){
      gsap.to(playbtn,{
          left: dets.x,
          top: dets.y,
      })
  })
}
page1_cursoranimation()