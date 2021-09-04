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
    const modalWindow = document.querySelector('.modal__content-container')
    overlayWrapper.classList.add('unvisible')
    overlayWrapper.classList.remove('visible')
    langList.classList.add('unvisible')
    langList.classList.remove('visible') 
    burgerNav.classList.remove('visible_nav')
    burgerNav.classList.add('unvisible')
    modalWindow.classList.remove('visible')
    modalWindow.classList.add('unvisible')
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

// copy to clipboard

const copyEmoji = document.querySelectorAll('[data-copy]')
console.log(copyEmoji);

copyEmoji.forEach(e => {
e.addEventListener('click', () => {
  navigator.clipboard.writeText(e.getAttribute('data-copy'));
  const popUp = document.querySelector('.snackbar-container')
  popUp.classList.add('visible-pop-up')
  popUp.classList.remove('unvisible')
  setTimeout(() => {
    popUp.classList.remove('visible-pop-up')
    popUp.classList.add('unvisible');
    
  }, 1200);
})
})
// trends btn 
if (document.getElementById('trends')) {
  const trendsBtn = document.querySelector('.trends-btn')
  trendsBtn.addEventListener('click', toggleTrends)
  
  function toggleTrends() {
    const trends = document.getElementById('trends-widget-1')
    trends.classList.toggle('visible')
    console.log(trends);
  }
}


// modal window 

const modalOpenBtn = document.querySelectorAll('.modal_open')

modalOpenBtn.forEach(e => {
  e.addEventListener('click', () => {
    const modalWindow = document.querySelector('.modal__content-container')
    const overlayWrapper = document.querySelector('.lang__list-wrapper')
    overlayWrapper.classList.add('visible')
    overlayWrapper.classList.remove('unvisible')
    modalWindow.classList.add('visible')
    modalWindow.classList.remove('unvisible')
  })
})
