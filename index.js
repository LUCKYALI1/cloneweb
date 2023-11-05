
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageanim(){
    var tl = gsap.timeline();
    
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.3,
        ease:Expo,
        stagger:.1
    })
    tl.to(".boundingelem",{
        y:0,
        ease:Expo.easeInout,
        delay:-1,
        duration:1.6,
        stagger:.2
    })
    tl.from("#landingpage_footer",{
       y:-10,
       opacity:0,
       duration:1.1,
       delay:-1,
       stagger:.2,
       ease: Expo.easeInout
    })
}
firstpageanim() 

function sizechangingcircle(){
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove",function(dets){
        var xdiff =   dets.clientX - xprev;
        var ydiff =   dets.clientY - yprev;
        xprev = dets.clientX;
        yprev = dets.clientY;
        
        xscale = gsap.utils.clamp(.8,1.2,xdiff);
        yscale = gsap.utils.clamp(.8,1.2,ydiff);
        
        criclemousefollower(xscale , yscale);
        
    })
    
}
sizechangingcircle()
function criclemousefollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(${xscale} , ${yscale})`
    })
}
criclemousefollower()

document.querySelectorAll("#secdiv")
.forEach(function(secdiv){
    var rotate = 0;
    var diffrot = 0;
    secdiv.addEventListener("mousemove", function(dets){
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.utils.clamp(-20,20,diffrot)
        let diff = dets.clienty - secdiv.getBoundingClientRect().top;
        gsap.to(secdiv.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top: diff,
        left: dets.clientX,
        rotate:diffrot,

     })
       
    })
    secdiv.addEventListener("mouseleave", function(dets){
        gsap.to(secdiv.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:.5,
     })
       
    })

})