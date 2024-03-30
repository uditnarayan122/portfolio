//Toggle icon navbar
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('#navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//Scroll section active link
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll= () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);
    //Remove toggle icon navbar
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// Typing
var typed=new Typed('.text',{
    strings:["Web Developer","Python Developer","ML Engineer"],
    typeSpeed:25,
    backSpeed:25,
    backDelay:1500,
    loop:true
});