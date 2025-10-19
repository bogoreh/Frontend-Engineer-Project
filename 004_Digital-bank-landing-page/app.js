document.documentElement.style.scrollBehavior = "smooth";  //scroll-behavior: smooth;

const body = document.body;
//preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load',()=>{
    body.classList.add('preloader-active');
    preloader.style.display = "none";
})


//toggle hamburger
const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.body__overlay');

navMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        overlay.style.background = "hsla(233, 26%, 24%,.5)";
        overlay.style.zIndex = "10";
    }else{
        overlay.style.background = "transparent";
        overlay.style.zIndex = "-1";
    }
})

// remove box-shadow in laptops and desktops
var x = window.matchMedia("(min-width: 1000px)");
if(x.matches && nav.classList.contains('active')){
    nav.classList.remove('active');
}

// transitions on scroll

const fadeFromLeft = document.querySelectorAll('.ffl');
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.isIntersecting && entry.target.classList.add('ffl-show');
    })
})
fadeFromLeft.forEach(el => observer.observe(el));

const fadeFromTop = document.querySelectorAll('.fft');
const observerTwo = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.isIntersecting && entry.target.classList.add('fft-show');
    })
})
fadeFromTop.forEach(el => observerTwo.observe(el));

const fadeFromBottom = document.querySelectorAll('.ffb');
const observerThree = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.isIntersecting && entry.target.classList.add('ffb-show');
    })
})
fadeFromBottom.forEach(el => observerThree.observe(el));