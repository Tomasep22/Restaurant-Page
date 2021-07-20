import './style.css';
import Icon from './img/coffee-beans.png'
import contactTab from './contact.js'
import Video from './Videos/Holding\ coffee\ beans.mp4'
import menuTab from './menu.js'


const HomeTab = (function() {
    const header = document.querySelector('header');
    let displaying = 'home';
    // tab icon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = Icon;
    document.head.appendChild(link);

    // display home tab
    function display() {
    const content = document.querySelector('#content');
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
    content.appendChild(backDiv)

    // h1 home
    const h1H = document.createElement('h1');
    h1H.classList.add('h1H');
    h1H.textContent = 'WE HAVE YOU COVERED!';
    backDiv.appendChild(h1H);

    // arrow
    const arrowDiv = document.createElement('div')
    arrowDiv.classList.add('arrowDiv')
    backDiv.appendChild(arrowDiv)

    const arrow = document.createElement('arrow')
    arrow.classList.add('arrow');
    arrowDiv.appendChild(arrow);

    arrowDiv.addEventListener('click', () => {
    window.scrollTo({top: window.innerHeight + header.offsetHeight, left: 0, behavior: 'smooth'});
    })

    // second div
    const speechDiv = document.createElement('div')
    speechDiv.classList.add('speech')
    content.appendChild(speechDiv)

    const p = document.createElement('p')
    p.classList.add('speechP')
    p.textContent = 'Whether it’s a celebration, a Sunday breakfast session, coffee with work mates or a break from shopping, we have you covered. Our baristas serve up our excellent blend of coffee and our waiters deliver your familiar favourites and our newest creations directly from the kitchen.'
    speechDiv.appendChild(p);

    // third div
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
}

display();

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
        assett: 'Empty indoor image'
    },
    {
        link: 'https://unsplash.com/photos/xO9NotFY4mU',
        author: 'by: Taisiia Shestopal - taken from: unsplash.com',
        assett: 'Latte image'
    },
    {
        link: 'https://unsplash.com/photos/ZgaW3FOXRPQ',
        author: 'by: Sincerely Media - taken from: unsplash.com',
        assett: 'Hot chocolate image'
    },
    {
        link: 'https://www.pexels.com/es-es/foto/comida-amanecer-cafeina-cafe-7471143/',
        author: 'by: Jean-Paul Wright - taken from: pexels.com',
        assett: 'Espresso image'
    },
    {
        link: 'https://www.pexels.com/es-es/foto/vaso-de-delicioso-capuchino-con-espuma-servido-en-platillo-4913337/',
        author: 'by: Maria Orlova - taken from: pexels.com',
        assett: 'Capuccino image'
    },
    {
        link: 'https://unsplash.com/photos/EsAoDa4ddqU',
        author: 'by: nitin pariyar - taken from: unsplash.com',
        assett: 'Ristretto image'
    },
    {
        link: 'https://www.dafont.com/es/coffee-shop.font',
        author: 'by: Doug Sheets - taken from: dafont.com',
        assett: 'Custom Font'
    }
    
];

ulFoot.innerHTML = ATRIBUTTIONS.map((attribution, index) => {
    return `<li class='attributionLi attribution${index}'><a class='attribution' target='_blank' href='${attribution.link}'>${attribution.assett} ${attribution.author}</a></li>`
}).join('');


// display home tab
function displayHome() {
    if(displaying === 'home') return
    displaying = 'home';
    document.querySelector('#content').innerHTML = '';
    window.scrollTo(0,0);
    display();
}

// display menu tab
function displayMenu() {
    if(displaying === 'menu') return
    displaying = 'menu';
    content.innerHTML = '';
    window.scrollTo(0,0);
    menuTab.display();
}

// disĺay contact tab
function displayContact() {
    if(displaying === 'contact') return
    displaying = 'contact';
    content.innerHTML = '';
    window.scrollTo(0,0);
    contactTab.display();
}

// add events to tabs
const homeLi = document.querySelector('#home');
homeLi.addEventListener('click', displayHome)
const contactLi = document.querySelector('#contact');
contactLi.addEventListener('click', displayContact);
const menuLi = document.querySelector('#menu');
menuLi.addEventListener('click', displayMenu);

window.onunload = function () {
    window.scrollTo(0,0);
};
    return {}
}());