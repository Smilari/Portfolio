function toggleMenu(){
    const links = document.querySelector('.hamburger__links');
    const icon  = document.querySelector('.hamburger__icon');

    links.classList.toggle('open');
    icon.classList.toggle('open');

}