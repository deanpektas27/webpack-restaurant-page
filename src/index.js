import { homeComponent } from './frontpage';
import { contactComponent } from './contact';
import { menuComponent } from './menu';


const container = document.querySelector('#content');
const header = document.querySelector('#header');
const navbar = document.createElement('nav');

const homeli = document.createElement('li');
const menuli = document.createElement('li');
const contactli = document.createElement('li');

const homebtn = document.createElement('a');
const menubtn = document.createElement('a');
const contactbtn = document.createElement('a');

navbar.classList.add('tab-list');
navbar.setAttribute('style','border-radius: 10px');

homebtn.innerText = 'Home';
homebtn.setAttribute('id', 'homebtn');

menubtn.innerText = 'Menu';
menubtn.setAttribute('id', 'menubtn');

contactbtn.innerText = 'Contact';
contactbtn.setAttribute('id', 'contactbtn');

homeli.appendChild(homebtn);
menuli.appendChild(menubtn);
contactli.appendChild(contactbtn);

navbar.appendChild(homeli);
navbar.appendChild(menuli);
navbar.appendChild(contactli);

header.appendChild(navbar);

homeComponent();

homebtn.addEventListener('click', () => {
    container.innerHTML = '';
    homeComponent();
})

menubtn.addEventListener('click', () => {
    container.innerHTML = '';
    menuComponent();
})

contactbtn.addEventListener('click', () => {
    container.innerHTML = '';
    contactComponent();
})
