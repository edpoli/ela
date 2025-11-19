
// se scroll oltre hero section allora navbar = black

var lastScroll = 690

window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {

        document.querySelector('.navbar-index').style.backgroundColor = "#997b66"

    } else {

        document.querySelector('.navbar-index').style.backgroundColor = '';
    }

    lastScrollPosition = currentScrollPosition;
}, { passive: true });


