let navigationState = false;
let navigationButton = document.getElementById('navigation-button');
let navigationList = document.getElementById('navigation-list');

navigationButton.addEventListener('click', e => {
    if (navigationState) {
        navigationHide();
    } else {
        navigationShow();
    }
    navigationState = !navigationState;
});

window.innerWidth

window.addEventListener('resize', e => {
    if (e.target.innerWidth >= 740 && burgerState) {
        navigationHide();
        navigationState = !navigationState;
    }
});

function navigationShow() {
    navigation.style.height = '220px';
    navigationList.style = 'top: 100px;';
    navigationButton.style = 'top: 10px;';
    setTimeout(() => {
        navigationButton.style.transform = 'rotate(180deg)'
    }, 200);
}

function navigationHide() {
    navigation.style.height = '';
    navigationList.removeAttribute('style');
    navigationButton.style.top = '';
    setTimeout(() => {
        navigationButton.style.transform = ''
    }, 200);
}