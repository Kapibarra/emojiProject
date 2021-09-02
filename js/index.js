// accodrion
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// lang select

const langBtn = document.querySelector('.header__lang-item')
const overlayWrapper = document.querySelector('.lang__list-wrapper')
langBtn.addEventListener('click', toggleLang)
overlayWrapper.addEventListener('click', closeLangDropDown)

function toggleLang() {
    const overlayWrapper = document.querySelector('.lang__list-wrapper')
    const langList = document.querySelector('.lang__list')
    overlayWrapper.classList.add('visible')
    overlayWrapper.classList.remove('unvisible')
    langList.classList.add('visible')
    langList.classList.remove('unvisible') 
}

function closeLangDropDown() {
    const overlayWrapper = document.querySelector('.lang__list-wrapper')
    const langList = document.querySelector('.lang__list')
    const burgerNav = document.querySelector('.burger__nav')
    overlayWrapper.classList.add('unvisible')
    overlayWrapper.classList.remove('visible')
    langList.classList.add('unvisible')
    langList.classList.remove('visible') 
    burgerNav.classList.remove('visible_nav')
    burgerNav.classList.add('unvisible')

}

// Burger button 

const burgerBtn = document.querySelector('.header__burger-nav')

burgerBtn.addEventListener('click',toggleMenu)

function toggleMenu() {
    const overlayWrapper = document.querySelector('.lang__list-wrapper')
    const burgerNav = document.querySelector('.burger__nav')
    overlayWrapper.classList.add('visible')
    overlayWrapper.classList.remove('unvisible')
    burgerNav.classList.add('visible_nav')
    burgerNav.classList.remove('unvisible')
}