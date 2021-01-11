window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
function toggleMenu(){
    var meunToggle = document.querySelector(".toggle");
    var meun =document.querySelector(".menu");
    meunToggle.classList.toggle("active");
    meun.classList.toggle("active");
}