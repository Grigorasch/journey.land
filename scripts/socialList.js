let social = document.getElementById('social');
let socialList = document.getElementById('social-list');
let socialState = false;

social.addEventListener('click', e => {
    if (socialState) {
        socialHide();
    } else {
        socialShow();
    }
    socialState = !socialState;
});

document.addEventListener('click', e => {
    if (socialState && e.target.id !== 'social') {
        socialHide();
        socialState = !socialState;
    }
});

window.addEventListener('resize', e => {
    if (e.target.innerWidth >= 650 && socialState) {
        socialHide();
        socialState = !socialState;
    } else if (e.target.innerWidth < 650 && socialState) {
        socialList.style = `height: 300px; position: absolute; left: ${(e.target.innerWidth - 150) / 2 -3}px; top: ${socialList.offsetTop}px;`;
    }
});

function socialShow() {
    let socialItem = socialList.getElementsByTagName('li');
    for (let i = 1; i < socialItem.length; i++) {
        socialItem[i].style = 'display: block;';
    }
    socialList.style = `height: 300px; position: absolute; left: ${socialList.offsetLeft}px; top: ${socialList.offsetTop}px;`;
}

function socialHide() {

    socialList.style = `position: absolute; left: ${socialList.offsetLeft}px; top: ${socialList.offsetTop}px;`;
    setTimeout(() => {
        let socialItem = socialList.getElementsByTagName('li');
        for (let i = 1; i < socialItem.length; i++) {
            socialItem[i].removeAttribute('style');
        }
        socialList.removeAttribute('style');
    }, 300);
}