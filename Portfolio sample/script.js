//querySelector() method returns the first element that matches a CSS selector.

const navToggle = document.querySelector('.nav-toggle');

//select the links
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    //add class to the toggle button
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

