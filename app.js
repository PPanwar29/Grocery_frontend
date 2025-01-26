import {videoanimation} from './video-animation.js'

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
