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
const langWrapper = document.querySelector('.lang__list-wrapper')
langBtn.addEventListener('click', toggleLang)
langWrapper.addEventListener('click', closeDropDown)

function toggleLang() {
    const langWrapper = document.querySelector('.lang__list-wrapper')
    const langList = document.querySelector('.lang__list')
    langWrapper.classList.add('visible')
    langWrapper.classList.remove('unvisible')
    langList.classList.add('visible')
    langList.classList.remove('unvisible') 
}

function closeDropDown() {
    const langWrapper = document.querySelector('.lang__list-wrapper')
    const langList = document.querySelector('.lang__list')
    langWrapper.classList.add('unvisible')
    langWrapper.classList.remove('visible')
    langList.classList.add('unvisible')
    langList.classList.remove('visible') 
}