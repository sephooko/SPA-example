let pageUrls = {
    about: '/index.html?about'
}
function onStartUp(params) {
    PopStateHandler();
}
onStartUp();
document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'about'
    }
    document.title = 'About'
    history.pushState(stateObj, 'about', '?about');
RenderAboutPage();
});

function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `<div>Hello</div>`;
}

function PopStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.about){
        RenderAboutPage();
    }
}
window.onpopstate = PopStateHandler;

