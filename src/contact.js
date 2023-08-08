import './style.css';
import ownerHeadshot from './owner.jpg';

const contactComponent = () => {
    const container = document.querySelector('#content');
    const div = document.createElement('div');
    div.setAttribute('id','contactComponent');
    const contactinfo = document.createElement('h2');
    contactinfo.textContent = 'Find us on Instagram and Facebook!';

    const homebtn = document.querySelector('#homebtn');
    const menubtn = document.querySelector('#menubtn');
    const contactbtn = document.querySelector('#contactbtn');
    homebtn.setAttribute('style', 'background-color: #643708;');
    menubtn.setAttribute('style', 'background-color: #643708;');
    contactbtn.setAttribute('style', 'background-color: #9b815d;');

    const ownerPic = new Image();
    ownerPic.src = ownerHeadshot;
    ownerPic.setAttribute('style','max-width: 300px; max-height: 300px; width: auto; height: auto; border-radius: 50%')

    div.appendChild(contactinfo);
    div.appendChild(ownerPic);
    container.appendChild(div);
}

export { contactComponent };