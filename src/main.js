
// se scroll oltre hero section allora navbar = black

var lastScroll = 690

window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {

        document.querySelector('.navbar').style.backgroundColor = "#343a40"
    
    } else {

        document.querySelector('.navbar').style.backgroundColor = '';
    }

    lastScrollPosition = currentScrollPosition;
}, { passive: true });
