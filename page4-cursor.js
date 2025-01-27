export function cursoranimation (){
    var videocon = document.querySelector("#page4-inner")
    var playbtn = document.querySelector("#cursor")
    videocon.addEventListener("mouseenter", function(){
        gsap.to(playbtn,{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })


    videocon.addEventListener("mouseleave", function(){
        gsap.to(playbtn,{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })


    videocon.addEventListener("mousemove", function(dets){
        gsap.to(playbtn,{
            left: dets.x+50,
            top: dets.y+50,
        })
    })
}
cursoranimation()