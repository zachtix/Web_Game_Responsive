let mainNav = document.getElementById('js_menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});