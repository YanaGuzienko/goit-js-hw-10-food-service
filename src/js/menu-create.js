import menuTemlates from '../templates/menu.hbs';
import allMenu from '../menu.json';

const markup = menuTemlates(allMenu);

const gallery = document.querySelector('.js-menu');

gallery.insertAdjacentHTML('beforeend', markup);
