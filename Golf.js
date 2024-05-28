let cursor=document.querySelector(".cursor");
let blur=document.querySelector(".blur-cursor");
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    blur.style.left=dets.x-100+"px";
    blur.style.top=dets.y-100+"px";
})

    let h4all=document.querySelectorAll(".navbar h4");
        h4all.forEach(function(elem){
           elem.addEventListener("mouseenter",function(){
            cursor.style.scale = 3;
            cursor.style.border = "0.5px solid #fff";
            cursor.style.backgroundColor = "transparent";
           })


           elem.addEventListener("mouseleave",function(){
            cursor.style.scale = 1;
            cursor.style.border = "0px solid #95c11e";
            cursor.style.backgroundColor = "#95c11e";
           })

        })
            
        

    





// -----------------------------animation usin gsap library-------------------------------
gsap.to(".navbar",{
    backgroundColor:"black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1.5
    }

})


gsap.from(".about-us img,.about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:4
    
    }


})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3
    
    }
})

gsap.from("#col1",{
    y:-100,
    x:-100,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }

})

gsap.from("#col2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }

})