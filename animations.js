/*TO THE TOP BUTTON*/
const btnScrollToTop = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
    if( document.documentElement.scrollTop > 200) {
        btnScrollToTop.style.display = "inline-block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
