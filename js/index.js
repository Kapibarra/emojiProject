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

const langbtn = document.getElementsByClassName("header__lang-item")

langbtn.addEventListener("click", () => {
    const landList = document.getElementsByClassName("lang__list")
})