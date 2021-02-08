import {gsap} from 'gsap'
import { Timeline } from 'gsap/gsap-core';
import $ from 'jquery'


[].forEach.call($('.icon-container'), function (link) {
    let svg = $(link).find('svg')
    let anchor = $(link).find('a')
    let t1 = new Timeline()
    $(link).on('mouseover', ()=> {
        t1.to(svg,1,{
            opacity:0
        }).to(svg,.1,{
            display:'none'
        })
        .to(anchor,1,{
            display:'contents'
        })
    });
    link.addEventListener('mouseout', () =>{
        gsap.to(svg,1,{
            display:'contents',
            opacity:100
        }).to(anchor,.1,{
            display:'none'
        })
    });
});




function coloringHandler() {
    gsap.from(this,10,{
        x:-100,
        opacity:0
    })
    this.dataset.initialInlineColor = this.style.color;
    this.style.color = 'blue';
}

function decoloringHandler() {
    this.style.color = this.dataset.initialInlineColor;
}