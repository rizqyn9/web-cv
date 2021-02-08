// import Splitting from 'splitting'
import LocomotiveScroll from 'locomotive-scroll';


let block = document.querySelectorAll(['.block-1','.block-2','.block-3','.block-4'])


const anim = (block) => {
    let tl1 = gsap.timeline({paused:true})

    return tl1
}

gsap.from('span', {
    opacity:0,
    stagger:.2
})


block.forEach((el) => {
    const animate = anim(el)

    el.addEventListener('mouseenter',()=> {
        animate.play()
    })
    el.addEventListener('mouseleave',()=> {
        animate.reverse()
    })
})


const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});

// let's skew the images when scrolling. The faster we scroll the higher the skew value
// skew interval from -15 to 15
// "fast scrolling" means the distance from the previous scrolling position to the current one is high. We consider a interval of [-50,50] for the min/max distance
let scroll = {cache: 0, current: 0};
const allImgs = [...document.querySelectorAll('.gallery__item-img')];
lscroll.on('scroll', (obj) => {
    scroll.current = obj.scroll.x;
    const distance = scroll.current - scroll.cache;
    scroll.cache = scroll.current;
});
lscroll.update();
