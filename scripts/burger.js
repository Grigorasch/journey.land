let burgerState = false;
let burgerButton = document.getElementById('burger-button');
let bodyDocument = document.getElementsByTagName('body')[0];
let feedbackDocument = document.getElementById('feedback');
let statisticDocument = document.getElementById('statistic');
let navigationDocument = document.getElementById('navigation');

burgerButton.addEventListener('click', e => {
    if (burgerState) {
        // bodyDocument.style='grid-template-columns: 0px 1fr;';
        burgerClose();
    } else {
        // bodyDocument.style='grid-template-columns: 270px 1fr;';
        burgerOpen();
    }
    burgerState = !burgerState;
})

function burgerOpen() {
    bodyDocument.style = 'grid-template-columns: 270px 1fr;';
    feedbackDocument.style = 'width: 100%; height: 100%; overflow: visible; opacity: 1;'
}

function burgerClose() {
    bodyDocument.removeAttribute('style');
    feedbackDocument.removeAttribute('style');
}