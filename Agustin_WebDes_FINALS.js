document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
        

document.querySelectorAll('.butto').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const profilePic = document.getElementById('main-pic');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    profilePic.addEventListener('mouseover', () => {
        profilePic.src = 'cat_waving.gif';
    });

    profilePic.addEventListener('mouseout', () => {
        profilePic.src = 'angaspic.jpg';
    });
});
