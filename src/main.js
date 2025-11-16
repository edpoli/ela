
// se scroll oltre hero section allora navbar = black

var lastScroll = 690

window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {

        document.querySelector('.navbar-index').style.backgroundColor = "#343a40"
        document.querySelector('.span-scritta').style.fontSize = '19px';
    } else {

        document.querySelector('.navbar-index').style.backgroundColor = '';
        document.querySelector('.span-scritta').style.fontSize = '';
    }

    lastScrollPosition = currentScrollPosition;
}, { passive: true });


