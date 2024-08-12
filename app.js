///Adding functionality to the Hamburger
function navSlide() {
    const nav = document.querySelector(".Navbar");
    const menu = document.querySelector(".nav-links")
    const burger = document.querySelector(".burger")
    burger.addEventListener("click", () => {
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}
navSlide();

////accordion
const accordions = document.getElementsByClassName("accordion")
const accordionItems = document.querySelectorAll(".accordion-Item")
accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener("click", () => {
        for (i = 0; i < accordionItems.length; i++) {
            if (accordionItems[i] != item) {
                accordionItems[i].classList.remove('active');
            }
            else {
                item.classList.toggle('active');
            }
        }

    })
});

///Adding functionality to the back to top

let mybutton = document.getElementById("backToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
//Automatic slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.images .item');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * slideWidth;
  document.querySelector('.images').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000);