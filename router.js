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
    `<div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Our Mission</h1>
    <p class="fs-5 text-muted">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
    We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
    <h2 class="display-6 text-center mb-4"> - Improving lives through learning! -</h2>
    </div>`;
}

function PopStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.about){
        RenderAboutPage();
    }
}
window.onpopstate = PopStateHandler;

