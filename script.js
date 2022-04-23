const overlay = document.querySelector('.overlay');
const barsIcon = document.querySelector('.mobile-navbar__icon-menu');
const mobileMenu = document.querySelector('.sliding-container');
const closeIcon = document.querySelector('.sliding-container__icon-close-menu');
const mobileMenuLists = document.querySelectorAll('.mobile-menu__item');
const menuLists = document.querySelectorAll('.menu__item');

barsIcon.addEventListener('click', () => {
    document.body.classList.add('show');
    overlay.classList.add('show');
    mobileMenu.classList.add('show');
});
overlay.addEventListener('click', e => {
    document.body.classList.remove('show');
    e.target.classList.remove('show');
    mobileMenu.classList.remove('show');
});
closeIcon.addEventListener('click', () => {
    document.body.classList.remove('show');
    overlay.classList.remove('show');
    mobileMenu.classList.remove('show');
});

mobileMenuLists.forEach(list => {
    list.addEventListener('mouseenter', e => {
        e.target.classList.add('show');
    });
    list.addEventListener('mouseleave', e => {
        e.target.classList.remove('show');
    });
});

menuLists.forEach((list, i) => {
    list.addEventListener('click', e => {
        e.target.classList.toggle('show');
        menuLists.forEach((lst, idx) => {
            if (idx !== i && lst.classList.contains('show')) {
                lst.classList.remove('show');
            }
        });
    });
});