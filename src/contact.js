const contactTab = (function() {
function display() {
    const content = document.querySelector('#content');

    // hero //
    const hero = document.createElement('div');
    hero.classList.add('hero');
    content.appendChild(hero);

    const h1Bg = document.createElement('div');
    h1Bg.classList.add('h1Bg');
    hero.appendChild(h1Bg);

    const h1C = document.createElement('h1');
    h1C.classList.add('h1C');
    h1Bg.appendChild(h1C);
    h1C.textContent = 'CONTACT US';

    // //

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('info');
    content.appendChild(contactInfo);

    const INFO = ['<strong>By Phone:</strong>', '1-234-567-8910', 'Monday through Friday', '<strong>By Text/SMS:</strong>', '9-876 543 210', 'Monday through Friday'];

    contactInfo.innerHTML = INFO.map(info => {
        return `<p style='text-align:center'>${info}</p>`
    }).join('');

}

return {
    display
}
}());

export default contactTab