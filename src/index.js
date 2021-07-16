import './style.css';
import Icon from './img/coffee-beans.png'

const link = document.createElement('link');
link.rel = 'icon';
link.href = Icon;
document.head.appendChild(link);

const content = document.querySelector('#content');

const h1 = document.createElement('h1');
h1.textContent = 'Kaffee Club'
content.appendChild(h1);

const h2 = document.createElement('h2');
h2.textContent = 'We have you covered!';
h2.classList.add('foo');
content.appendChild(h2);


const p = document.createElement('p')
p.textContent = 'Whether it’s a celebration, a Sunday breakfast session, coffee with work mates or a break from shopping, we have you covered. Our baristas serve up our excellent blend of coffee and our waiters deliver your familiar favourites and our newest creations directly from the kitchen.'
p.classList.add('foo');
content.appendChild(p);


/*const image = document.createElement('img');
image.src = Image;
content.appendChild(image);*/
