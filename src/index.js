import './style.css';
import Icon from './img/coffee-beans.png'
import contactTab from './contact.js'
import Video from './Videos/Holding\ coffee\ beans.mp4'


const HomeTab = (function() {
    function display() {
    // Tab icon
const link = document.createElement('link');
link.rel = 'icon';
link.href = Icon;
document.head.appendChild(link);
//
const header = document.querySelector('header')
// home video
const backDiv = document.createElement('div');
backDiv.classList.add('backDiv');
const video = document.createElement('video');
video.preload = 'auto'
video.loop = 'true'
video.autoplay = 'true'
video.muted = 'true'
video.width = window.innerWidth;
backDiv.appendChild(video)
const source = document.createElement('source')
source.src = Video
source.type = 'video/mp4'
video.appendChild(source)
document.addEventListener('load', () => {
    video.play()
})
//
const content = document.querySelector('#content');
//
content.appendChild(backDiv)
//

const h1 = document.createElement('h1');
h1.classList.add('h1H');
h1.textContent = 'WE HAVE YOU COVERED!';
backDiv.appendChild(h1);

const arrowDiv = document.createElement('div')
arrowDiv.classList.add('arrowDiv')
backDiv.appendChild(arrowDiv)

const arrow = document.createElement('arrow')
arrow.classList.add('arrow');
arrowDiv.appendChild(arrow);

arrowDiv.addEventListener('click', () => {
   window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'});
})


const speechDiv = document.createElement('div')
speechDiv.classList.add('speech')
content.appendChild(speechDiv)

const p = document.createElement('p')
p.classList.add('speechP')
p.textContent = 'Whether it’s a celebration, a Sunday breakfast session, coffee with work mates or a break from shopping, we have you covered. Our baristas serve up our excellent blend of coffee and our waiters deliver your familiar favourites and our newest creations directly from the kitchen.'
speechDiv.appendChild(p);


const emailFormDiv = document.createElement('div')
emailFormDiv.classList.add('emailFormDiv');
content.appendChild(emailFormDiv);

const h2EF = document.createElement('h2')
h2EF.classList.add('h2EF');
h2EF.textContent = 'Keep Updated';
emailFormDiv.appendChild(h2EF);

const lineEF = document.createElement('hr');
lineEF.classList.add('lineEF');
emailFormDiv.appendChild(lineEF);


const emailForm = document.createElement('form')
emailForm.classList.add('emailForm');
emailFormDiv.appendChild(emailForm)

const pEF = document.createElement('p');
pEF.classList.add('pEF');
pEF.textContent = 'To be the first to hear of our exclusive news, offers and updates, please subscribe below.';
emailForm.appendChild(pEF);

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.classList.add('email');
emailInput.placeholder = 'Enter your email address';
emailForm.appendChild(emailInput);

const submitEF = document.createElement('button');
submitEF.type = 'submit';
submitEF.disabled = true;
submitEF.textContent = 'Subscribe';
submitEF.classList.add('submitEF');
emailForm.appendChild(submitEF);


const footer = document.createElement('footer');
document.body.appendChild(footer);
const ulFoot = document.createElement('ul');
ulFoot.classList.add('ulFoot');
footer.appendChild(ulFoot);
const ATRIBUTTIONS = [
    {
        link: 'https://www.flaticon.com/authors/photo3idea-studio',
        author: 'by: photo3idea_studio - taken from: flaticon.com',
        assett: 'Bean tab icon'
    },
    {
        link: 'https://coverr.co/videos/holding-coffee-beans-xtT83so1Qh',
        author: 'by: unknown author - taken from: coverr.co',
        assett: 'Holding coffee beans video'
    },
    {
        link: 'https://unsplash.com/photos/6VhPY27jdps',
        author: 'by: Nathan Dumlao - taken from: unsplash.com',
        assett: 'Three persons holding beverage image'
    },
    {
        link: 'https://unsplash.com/photos/BZw2fWK-9lo',
        author: 'by: Jessica Lewis - taken from: unsplash.com',
        assett: 'Filled while teacup image'
    },
    {
        link: 'https://unsplash.com/photos/5G9uIkAXLSc',
        author: 'by: Jonathan Borba - taken from: unsplash.com',
        assett: 'empty indoor image'
    }
];

ulFoot.innerHTML = ATRIBUTTIONS.map((attribution, index) => {
    return `<li class='attributionLi attribution${index}'><a class='attribution' target='_blank' href='${attribution.link}'>${attribution.assett} ${attribution.author}</a></li>`
}).join('');

const homeLi = document.querySelector('#home');
homeLi.addEventListener('click', displayHome)

function displayHome() {
    document.querySelector('#content').innerHTML = '';
    document.body.removeChild(document.querySelector('footer'));
    display();
}
}
display();
window.onunload = function () {
    window.scrollTo(0,0);
};

const contactLi = document.querySelector('#contact');
contactLi.addEventListener('click', displayContact);

function displayContact() {
    content.innerHTML = '';
    contactTab.display();
}
    return {}
}());


