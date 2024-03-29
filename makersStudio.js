// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });

a='main'

function loco(a){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(a),
      smooth: true,
  
      // for tablet smooth
      tablet: { smooth: true },
  
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(a, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

var locoScrollInstance = loco('main');

gsap.from('.proj-hero_content h1',{
    opacity:0,
    filter:'invert(100%)',
    transform:'translateY(100%)',
    delay:1,
    duration:.8,
    stagger:.5,
})

gsap.from('.proj-hero_content .inner',{
    transform:'translateX(50%)',
    scale:0,
    duration:.8,
    delay:1
})

gsap.from('.hero-section',{
    scale:0,
    filter:'invert(100%)',
    duration:.6,
    delay:1.4
})

gsap.from('#page-2 h1',{    
    opacity:0,
    transform:'translateY(80%)',
    scrollTrigger:{
        trigger:"#page-2",
        scroller:'main',
        start:'top 50%',
        end:'top 90%',
        scrub:1,
    }
    
})

gsap.to('#page-3',{
    transform: 'translateX(-200%)',
    scrollTrigger:{
        trigger:'#page-3',
        scroller:'main',
        // markers:true,
        start:'top 0%',
        end:'top -150%',
        scrub:5,
        pin:true
    }
})

gsap.from('#page-5 #img-1',{
    opacity:0,
    transform: 'translateY(100%)',
    scrollTrigger:{
        trigger:'#page-5 #img-1',
        scroller:'main',
        // markers:true,
        start:'top 160%',
        end:'top 120%',
        scrub:1
    }
})

gsap.from('#page-5 #img-2',{
    opacity:0,
    transform: 'translateY(100%)',
    scrollTrigger:{
        trigger:'#page-5 #img-2',
        scroller:'main',
        // markers:true,
        start:'top 158%',
        end:'top 120%',
        scrub:1
    }
})
