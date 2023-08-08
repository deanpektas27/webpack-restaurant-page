import './style.css';
import Logo from './logo.png';


const homeComponent = () => {
    const container = document.querySelector('#content');
    const div = document.createElement('div');

    const homebtn = document.querySelector('#homebtn');
    const menubtn = document.querySelector('#menubtn');
    const contactbtn = document.querySelector('#contactbtn');
    homebtn.setAttribute('style', 'background-color: #9b815d;');
    menubtn.setAttribute('style', 'background-color: #643708;');
    contactbtn.setAttribute('style', 'background-color: #643708;');


    div.setAttribute('id','homeComponent');
    const headline = document.createElement('h2');
    const bio = document.createElement('p');
    headline.innerText = "It's so good you wouldn't believe it!";
    bio.innerText = "Fradel and Spies has everything you never even knew you wanted. Why settle for less? All of our food and beverages are competitively priced with other New York spots! (if you don't count tax of course). If only we really existed...";
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.setAttribute('id','logo');
    
    div.appendChild(myLogo);
    div.appendChild(headline);
    div.appendChild(bio);
    container.appendChild(div);
}

export { homeComponent };