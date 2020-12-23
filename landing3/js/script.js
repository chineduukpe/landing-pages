(function(){
    const toggleNav = function(){
        nav.classList.toggle('show');
    }
    console.log("app loaded")
    let nav = document.querySelector('nav');
    document.querySelector('.nav-toggle').addEventListener('click',toggleNav);
    document.querySelector('.close-nav').addEventListener('click',toggleNav);

    // ANIMATION
    let tl = gsap.timeline();
    tl.from('.hero-content h1',1,{
        duration: 2,
        x: - 1000,
        // ease: '',
    })
    .from('.hero-content p',.6,{
        x: -1000
    })
    .from('.hero-content small',1,{
        x: -1000
    },'-=.5')
    .from('.hero-content .learn-btn',1,{
        height: 0
    },"-=.6")
    .from('.hero-gallery-img',1,{
        scale: 0,
        ease: "bounce.out"
    },"-=1")

    // END ANIMATION
})()