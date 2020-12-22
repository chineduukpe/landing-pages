


(function(){
    document.querySelectorAll('.menu-toggle').forEach(function(item) {
        item.addEventListener('click',function(e){
            e.preventDefault();
            document.querySelector('nav').classList.toggle('show')
        })
    })

    document.querySelectorAll('.theme-switcher a').forEach(function(element){
        element.addEventListener('click',function(evt){
            let newTheme = this.getAttribute('data-theme');
            
            evt.preventDefault();
            document.querySelector('#theme-css').setAttribute('href',newTheme);
            
        })
    })

    // Remove Loader on load
    setTimeout(function (params) {
        document.querySelector('.page-loader').classList.remove('show');
    },2000);

    // START ANIMATIONS
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    const text_tl = gsap.timeline();
    let banner_text_index = 0;
    let banner_texts = [
        'ew School!',
        'The Future',
        'Builing Blocks'
    ];
    
    text_tl.from('.hero-text-wrapper',{
        x: -2000,
        delay: 2,
        duration: 2,
        ease: Power4.easeOut,
    })
    .to('#newworldtext',3,{
        duration: .5,
        text: {
            value: banner_texts[banner_text_index],
        },
        yoyo: true,
        repeat: -1,
    })

    let  contact_animation = gsap.fromTo('.form-area',2,{
        x: -20,
        // ScrollTrigger:{
        //     trigger:'.contact-section',
        //     start: "top center"
        // }
    },{
        x: 50,
        duration: 1,
        speed: 50
    })

    const tl3 = gsap.timeline();

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: '.contact-section',
        duration: "200%",
        // triggerHook: -100,
    })
    .setTween(contact_animation)
    .addTo(controller);


    let geo_tl = gsap.timeline();

    geo_tl.from('#g3973',2,{
        y: 50,
        repeat: -1,
        duration: 1,
        ease: Power2.easeOut,
        yoyo: true,

    })
    .from('#g3289',{
        y: 100,
        duration: 2,
        delay: .4,
        yoyo: true,
        repeat: -1,
    })
    .from('#path2995-9',{
        y: 50,
        duration: 2.3,
        delay: .8,
        yoyo: true,
        repeat: -1,
    },"-=2")

    gsap.from('#path4953',{
        duration: 2,
        yoyo: true,
        fill: "#da4500",
        repeat: -1,
    })

    gsap.from('#path4953',{
        duration: 2,
        yoyo: true,
        fill: "#da4500",
        repeat: -1,
    })
    
    gsap.from('#path4979',{
        duration: 2,
        yoyo: true,
        fill: "#000",
        repeat: -1,
    })

    // END ANIMATIONS

    // CHANGE NAVIGATION BACKGROUND ON SCROLL
    window.addEventListener('scroll',function(e){
        if (window.scrollY > 100) {
            document.querySelector('.site-social-links').classList.add('shrink')
            document.querySelector('#back-to-top').classList.add('show')
            return document.querySelector('nav').classList.add('active')
            
        }
        document.querySelector('#back-to-top').classList.remove('show')
        document.querySelector('.site-social-links').classList.remove('shrink')
        return document.querySelector('nav').classList.remove('active')
    })
    // END CHANGE NAVIGATION BACKGROUND ON SCROLL
})()