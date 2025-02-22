document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar_toggle');
    const navLinks = document.querySelector('.main_nav');

    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        navLinks.classList.toggle('show_nav');
    });
});
