import $ from 'jquery'
import {TweenLite} from 'gsap'


// document.addEventListener('mousemove', (e)=> {
//     document.querySelectorAll('.parallax').forEach(element => {
//         const x = (window.innerWidth - e.pageX*5)/50
//         const y = (window.innerHeight - e.pageY*5)/50
//         element.style.transform = `translate(${x}px,${y}px)`
//     });
// })

  
  $(document).mousemove(function(e) {
    TweenLite.to('#triangle', 0.2, {
        x: -((e.clientX - window.innerWidth / 2) / 30),
        y: -((e.clientY - window.innerHeight / 2) / 30)
      });
    });