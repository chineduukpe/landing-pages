(function(){
    const toggleNav = function(){
        nav.classList.toggle('show');
        console.log("Toggling nav")
    }
    console.log("app loaded")
    let nav = document.querySelector('nav');
    document.querySelector('.nav-toggle').addEventListener('click',toggleNav);
    document.querySelector('.close-nav').addEventListener('click',toggleNav);

})()