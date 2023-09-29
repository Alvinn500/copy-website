window.onscroll = () => {
    const header = document.querySelector('nav');
    const fixedNav = header.offsetTop;  

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}