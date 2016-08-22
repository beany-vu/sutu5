
Stn = {}
document.addEventListener("DOMContentLoaded", function() {


});
window.onload = function() {
    var lion = document.getElementsByClassName('lion');
    if (typeof lion != 'undefined') {
        var lion_qty_piece = lion.length,
            type = 8,
            type_instance = 1,
            i = 0,
            pieces_class = '';
        if (lion_qty_piece > 0) {
            for (i; i < lion_qty_piece; i++) {
                pieces_class = 'recombine' + type_instance;
                lion[i].classList.add(pieces_class);
                type_instance == type ? type_instance = 1 : type_instance++;
            }
        }
        delete type;
        delete lion_qty_piece;
        delete type_instance;
        delete pieces_class;
    }
    delete lion;

    // create timeline
    var timeline = new TimelineMax({paused:true});
    // var timeline = new TimelineLite({pause:true});
    Stn.timeline = timeline;
    // add value into timeline
    timeline.add('lion', 0);
    timeline.add('triangle', 1.5);
    timeline.add('overlay', 2.5);
    timeline.add('heading', 3.5);
    timeline.add('sub-heading', 3.8);
    timeline.add('scroll-btn', 4.5);
    timeline.add('txt2-to-txt3', 5.5);
    timeline.add('txt3-to-txt4', 6.5);

    timeline.addPause('txt2-to-txt3');
    timeline.addPause('txt3-to-txt4');

    // specify timeline
    timeline.to(document.getElementById('overlay-lion'), 0.1, {opacity: 1}, 'lion');
    timeline.to(document.getElementById('container-lion'), 3, {opacity: 1, ease:  Sine.easeInOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine1'), 3, {x: '-1500', y: '-1500', scale: 2, rotation: -45, ease:  Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine2'), 3, {x: '-400', y: '-1000', rotation: -45, ease: Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine3'), 3, {x: '0', y: '-1000', scale: 2, rotation: -45, ease:  Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine4'), 3, {x: '600', y: '-100', rotation: -45, ease:  Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine5'), 3, {x: '800', y: '800', scale: 2, rotation: -45, ease:  Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine6'), 3, {x: '-2000', y: '-400', rotation: -45, ease:  Power2.easeOut}, 'lion')
    timeline.from(document.getElementsByClassName('recombine7'), 3, {x: '-200', y: '400', scale: 2, rotation: -45, ease: Power2.easeOut}, 'lion');
    timeline.from(document.getElementsByClassName('recombine8'), 3, {x: '-400', y: '-400', rotation: -45, ease: Power2.easeOut}, 'lion');

    timeline.to(document.getElementById('container-triangle'), 2.5, {opacity: 1}, 'triangle');
    timeline.from(document.getElementById('triangle1'), 2.5, {y: '100%', rotation: 45, ease: Power4.easeOut}, 'triangle');
    timeline.from(document.getElementById('triangle2'), 2.5, {y: '100%', rotation: 45, ease: Power4.easeOut}, 'triangle');
    timeline.from(document.getElementById('triangle3'), 2.5, {y: '100%', rotation: -45, ease: Power4.easeOut}, 'triangle');
    timeline.from(document.getElementById('triangle4'), 2.5, {y: '200%', ease: Power4.easeOut}, 'triangle');
    timeline.from(document.getElementById('triangle5'), 2.5, {y: '200%', ease: Power4.easeOut}, 'triangle');
    timeline.from(document.getElementById('triangle6'), 2.5, {y: '200%', rotation: -45, ease: Power4.easeOut}, 'triangle');


    timeline.to(document.getElementById('heading'), 1, {opacity: 1, y: '0',ease: Power2.easeOut}, 'heading');
    timeline.to(document.getElementById('heading-txt-small'), 1, {opacity: 1, y: '0',ease: Power2.easeOut}, 'sub-heading');

    timeline.to(document.getElementById('button-lion'), 1, {opacity: 1,ease: Power2.easeOut}, 'scroll-btn');

    timeline.to(document.getElementById('txt2'), 1 , {opacity:0, y: '-50%'}, 'txt2-to-txt3');
    timeline.to(document.getElementById('txt3'), 1 , {opacity:1, y: '0'}, 'txt2-to-txt3');

    timeline.to(document.getElementById('txt3'), 1 , {opacity:0, y: '-50%'}, 'txt3-to-txt4');
    timeline.to(document.getElementById('txt4'), 1 , {opacity:1, y: '0'}, 'txt3-to-txt4');

    timeline.play();

    StnNavigation.detectNextPrev(timeline, 'scroll-btn');

}