import {gsap} from 'gsap'

// Animate Reveal
gsap.from('.line',2,{
    y: 200,
    ease: "power4.out",
    delay: 0,
    skewY: 10,
    stagger: {
        amount: .6,
    },
})
