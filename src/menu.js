import Espresso from './img/espresso.jpg'
import Ristretto from './img/ristretto.jpg'
import Capuccino from './img/capuccino.jpg'
import HotChoco from './img/hot_choco.jpg'
import Latte from './img/latte.jpg'

const menuTab = (function() {
    const content = document.querySelector('#content');
    function display() {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv');
        content.appendChild(mainDiv);

        const intro = document.createElement('div');
        intro.classList.add('intro');
        mainDiv.appendChild(intro);
        const h1M = document.createElement('h1');
        h1M.classList.add('h1M');
        h1M.textContent = 'Kaffee Selection';
        intro.appendChild(h1M);
        const description = document.createElement('p');
        description.classList.add('introP');
        description.textContent = 'We make freshly brewed Black coffee at its best. Which is your favorite?';
        intro.appendChild(description);

        const menuContainer = document.createElement('div');
        menuContainer.classList.add('mContainer');

        const MENU = [
            {
                image: Espresso,
                name: 'Espresso',
                description: 'Classic italian espresso'
            },
            {
                image: Ristretto,
                name: 'Ristretto',
                description: 'A short or restricted espresso with a smooth finish'
            },
            {
                image: Capuccino,
                name: 'Capuccino',
                description: 'Single shot of espresso topped with steamed milk and velvety foam'
            },
            {
                image: Latte,
                name: 'Kaffee Latte',
                description: 'Single shot of espresso topped with steamed milk'
            },
            {
                image: HotChoco,
                name: 'Hot Chocolate',
                description: 'Chocolate powder mixed with steamed milk and foam'
            },
        ];

        menuContainer.innerHTML = MENU.map((coffee, index) => {
            return `
                <div class="mItem mItem${index}">
                <img class="mImg" src="${coffee.image}" alt="${coffee.name} image">
                <span class="nameNdesc">
                <h2>${coffee.name}</h2>
                <p>${coffee.description}</p>
                </span>
                </div>`
        }).join('');

        mainDiv.appendChild(menuContainer);
    }
    return {
        display
    }
}());

export default menuTab
