
function section1Animation(){
    let tl=gsap.timeline()
tl.from('nav h1,.nav-links h4,nav button,.menu',{
    y:-30,
    duration:0.4,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
tl.from('.hero-section h2',{
    x:-300,
    duration:0.3,
    opacity:0
})
tl.from('.hero-section p',{
    x:-200,
    duration:0.3,
    opacity:0
})
tl.from('.hero-section button',{
    opacity:0
})
tl.from('.hero-section img',{
    opacity:0,
    x:100,

},"-=0.3")
tl.from('.our-partner img',{
    opacity:0,
    duration:0.2,
    stagger:0.15,
    y:30,

})


}
section1Animation()

function section2Animation(){
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'#section2',
        scroller:'body',
        start:'top 50%',
        end:'top 0%',
        scrub:1
    }
})
tl2.from('.services-section h2',{
    y:-30,
    duration:0.1,
    opacity:0
})
tl2.from('.services-section p',{
    y:30,
    duration:0.1,
    opacity:0
})
tl2.from('.card1',{
    x:-200,
    duration:0.2,
    opacity:0
},'a')
tl2.from('.card2',{
    x:200,
    duration:0.2,
    opacity:0
},'a')
tl2.from('.card3',{
    x:-200,
    duration:0.2,
    opacity:0
},'b')
tl2.from('.card4',{
    x:200,
    duration:0.2,
    opacity:0
},"b")
}
section2Animation()

function section3Animation(){
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:'#section3',
        scroller:'body',
        // markers:true,
        start:'top 50%',
        end:'top 0%',
        scrub:1
    }
})
tl3.from('.contact-left h3,.contact-left p,.contact-left button',{
    x:-200,
    duration:0.2,
    stagger:0.15,
    opacity:0,
})
tl3.from('.contact-right img',{
    x:200,
    duration:0.2,
    opacity:0
})
tl3.from('.casestudy-section h2,.casestudy-section p',{
    y:30,
    duration:0.2,
    opacity:0
})

}
section3Animation()

function menuAnimation(){
let tl4=gsap.timeline()
tl4.to('.full-menu',{
    right:'0',
    duration:0.2
})
tl4.from('.full-menu svg',{
    opacity:0
})
tl4.from('.full-menu h4,.full-menu button',{
    x:200,
    opacity:0,
    duration:0.2,
    stagger:0.15,
})

tl4.pause()
document.querySelector('.menu').addEventListener('click',()=>{
    tl4.play()
})

document.querySelector('.full-menu svg').addEventListener('click',()=>{
    tl4.reverse()
})

}
menuAnimation()