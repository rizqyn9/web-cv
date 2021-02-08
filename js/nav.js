import {gsap} from "gsap";

// Set link for div NAV
document.querySelector('#icon-home').href='./index.html'
document.querySelector('#icon-about').href='./about.html'
document.querySelector('#icon-skills').href='./skills.html'
document.querySelector('#icon-works').href='./works.html'
document.querySelector('#icon-contact').href='./contact.html'

gsap.from('nav',.2,{
    left:'-10vw'
})
gsap.from('.logo',.5,{
    opacity:0,
    top:'-10vh'
})
gsap.from('#R-1',.5,{
    opacity:0,
    right:'-5vw'
})
gsap.from('#R-2',.5,{
    opacity:0,
    left: '-5vw'
})
gsap.from('.dev',.5,{
    fontSize:0,
    delay:.4
})
gsap.from('.icon-container',1.5,{
    stagger:.2,
    rotation:'500deg',
    scale:0,
    top:'-100vh',
    delay:-1
})

gsap.from('.active .char',1,{
    display:'inline-block',
    scale:0,
    stagger:.2,
})

gsap.to('.icon-container > svg',1.5,{
    opacity:1,
    strokeDasharray:'500px',
    ease: "power4.inOut"
  })
