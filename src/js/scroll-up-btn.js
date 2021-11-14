const scrollUpBtn = document.querySelector('.scroll-up-btn')

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(e) {
    e.preventDefault()
    document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  })  // For Safari
  document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    }) 
    // For Chrome, Firefox, IE and Opera
}

scrollUpBtn.addEventListener('click', topFunction)