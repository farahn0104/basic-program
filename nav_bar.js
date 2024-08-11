// JavaScript for mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    const menuToggle = document.getElementById('menu-toggle');

    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
