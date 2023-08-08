import './style.css';
import fooditem1 from './fooditem1.png';
import fooditem2 from './fooditem2.png';

const menuComponent = () => {
    const container = document.querySelector('#content');
    const div = document.createElement('div');
    div.setAttribute('id','menuComponent');

    const homebtn = document.querySelector('#homebtn');
    const menubtn = document.querySelector('#menubtn');
    const contactbtn = document.querySelector('#contactbtn');
    homebtn.setAttribute('style', 'background-color: #643708;');
    menubtn.setAttribute('style', 'background-color: #9b815d;');
    contactbtn.setAttribute('style', 'background-color: #643708;');

    const menutitle = document.createElement('h2');
    menutitle.textContent = 'Check out our menu!';
    menutitle.setAttribute('style', 'color: white; margin: 50px;');

    const item1div = document.createElement('div');
    item1div.setAttribute('id','container');
    const Item1 = new Image();
    Item1.src = fooditem1;
    Item1.setAttribute('id','fooditem1');
    Item1.setAttribute('style','border-radius: 10px; width: 400px;');
    item1div.appendChild(Item1);
    const item1title = document.createElement('h3');
    item1title.innerText = "Pretty Patty $4.95";
    item1div.appendChild(item1title);
    item1div.setAttribute('style','margin: 100px');

    const item2div = document.createElement('div');
    item2div.setAttribute('id','container');
    const Item2 = new Image();
    Item2.src = fooditem2;
    Item2.setAttribute('id','fooditem2');
    Item2.setAttribute('style','border-radius: 10px; width: 400px');
    item2div.appendChild(Item2);
    const item2title = document.createElement('h3');
    item2title.innerText = "Ugly Patty $7.49";
    item2div.appendChild(item2title);
    item2div.setAttribute('style','margin: 100px');

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('style', 'border-radius: 5px; background-color: #643708; color: white; display: inline-block; padding: 20px; margin: 50px;');

    menuContainer.appendChild(menutitle);
    menuContainer.appendChild(item1div);
    menuContainer.appendChild(item2div);
    div.appendChild(menuContainer);
    container.appendChild(div);
}

export { menuComponent };