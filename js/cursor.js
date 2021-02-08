import {gsap} from 'gsap'

document.body.style.cursor ='none'

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
var mouse = {
x: -100,
y: -100,
};

// Just in case you need to scroll
let scrollHeight = 0;
window.addEventListener('scroll', function(e) {
    scrollHeight = window.scrollY
})

let cursorOuterOriginalState = {
    width: cursorOuter.getBoundingClientRect().width,
    height: cursorOuter.getBoundingClientRect().height,
};
const buttons = document.querySelectorAll(".icon-container");


buttons.forEach((button) => {
    button.addEventListener("pointerenter", handleMouseEnter);
    button.addEventListener("pointerleave", handleMouseLeave);
});



// Cursor Hold
document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 2,
        background:'red'
    });
});
document.body.addEventListener("pointerup", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 1,
        background:'#6FFFE9'
    });
});

// Cursor Move
function updateCursorPosition(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function updateCursor() {
    gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y,
    });

    if (!isStuck) {
        gsap.to(cursorOuter, {
        duration: 0.15,
        x: mouse.x - cursorOuterOriginalState.width/2,
        y: mouse.y - cursorOuterOriginalState.height/2,
        });
    }

    requestAnimationFrame(updateCursor);
}

updateCursor();


// Hover Nav Link
function handleMouseEnter(e) {
    isStuck = true;
    const targetBox = e.currentTarget.getBoundingClientRect();
    gsap.to(cursorInner,0,{
        display:'none'
    })
    
    gsap.to(cursorOuter, 0.2, {
        x: targetBox.left, 
        y: targetBox.top + scrollHeight,
        width: targetBox.width,
        height: targetBox.width,
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    })
}

function handleMouseLeave(e) {
    isStuck = false;
    gsap.to(cursorOuter, 0.2, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: "50%",
        backgroundColor: "transparent",
    })
    gsap.to(cursorInner,0.2,{
        display:'block'
    })
}



