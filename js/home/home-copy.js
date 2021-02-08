import { gsap, TweenLite, TweenMax, TimelineLite, TimelineMax, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";



// import anime from 'animejs/lib/anime.es.js';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

import $ from 'jquery'
import drawsvg from '../plugin/jquery.drawsvg'
import splitting from "splitting";
import { Timeline } from "gsap/gsap-core";

let SCR_width = $(window).innerWidth()
let SCR_height = $(window).innerHeight()
console.log(

);

// ! DONT TOUCH ME ! :))
setTimeout(()=>{
  document.querySelector('.home').classList.remove('off-event')
},1000)

// data-splitting
splitting()
splitting({target:['.front'],by:'chars'})

// SVG ANIMATION FULL STACK
gsap.to('#Full_Stack',1.5,{
  opacity:1,
  strokeDasharray:'500px',
  ease: "power4.inOut"
})
gsap.to('#Full_Stack2',2,{
  opacity:1,
  strokeDasharray:'1000px',
  ease: "slow(0.7, 0.1, false)",
  delay:1
})


gsap.from('.front .char',1,{
  display:'inline-block',
  rotate:'200deg',
  x:'-20vw',
  stagger:{
    from:'end',
    each:.1,
    ease:"power4.inOut"
  }
})
gsap.from('.end .char',1,{
  display:'inline-block',
  rotate:'-200deg',
  x:'20vw',
  ease:"power4.inOut",
  stagger:.1
})

gsap.from('.specializing .char',.5,{
  height:'20vh',
  display:'inline-block',
  scale:'10',
  rotate:'380deg',
  x:300,
  stagger:.1,
  delay:.8
})

gsap.from('.indonesian .char',1,{
  skewX:'50',
  display:'inline-block',
  x:'-60vw',
  stagger:{
    from:'end',
    each:0,
    ease: "expo.inOut"
  },
  delay:.8
})

gsap.from('.based .char',1,{
  height:'25vh',
  y:200,
  display:'inline-block',
  stagger:{
    each:.02
  },
  delay:1.2
})


gsap.from('.rizqy .char',1,{
  stagger:.02,
  display:'inline-block',
  y:'40vh',
  delay:1.4
})

gsap.from('.iam .char',1,{
  display:'inline-block',
  x:'19vw',
  delay:1.7,
})
gsap.from('.hello .char',.5,{
  display:'inline-block',
  skewX:'50',
  scale:2,
  x:'35vw',
  delay:1.9,
  stagger:{
    each:.1,
  }
})