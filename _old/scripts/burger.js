let burgerState = false;
let burgerButton = document.getElementById('burger-button');
let asideMenu = document.getElementById('aside');
let mainWrapper = document.getElementById('main-wrapper');
let statistic = document.getElementById('statistic');
let navigation = document.getElementById('navigation');
let main = document.getElementById('main');
let footer = document.getElementById('footer');

burgerButton.addEventListener('click', e => {
    if (burgerState) {
        burgerClose();
    } else {
        burgerOpen();
    }
    burgerState = !burgerState;
});

window.addEventListener('resize', e => {
    if (e.target.innerWidth >= 1100 && burgerState) {
        burgerClose();
        burgerState = !burgerState;
    }
});

function burgerOpen() {
    let blockWidth = window.innerWidth - 22;

    asideMenu.style = 'width: 270px; opacity: 1;';
    mainWrapper.style = 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
    statistic.style = `width: ${blockWidth}px`
    navigation.style.width = `${blockWidth}px`
    main.style = `width: ${blockWidth}px`
    footer.style = `width: ${blockWidth}px`
}

function burgerClose() {
    asideMenu.removeAttribute('style');
    mainWrapper.removeAttribute('style');
    statistic.removeAttribute('style');
    navigation.style.width = '';
    main.removeAttribute('style');
    footer.removeAttribute('style');
}