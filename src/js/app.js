import '../sass/index.sass';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Scroll from './scroll';
import Slider from './slider';

UIkit.use(Icons);

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let images = [
  {
    id: 1,
    name: '1.jpg',
    text: 'Скандинавский стиль'
  },
  {
    id: 2,
    name: '2.jpg',
    text: 'Лофт'
  },
  {
    id: 3,
    name: '3.jpg',
    text: 'Этнический стиль'
  },
  {
    id: 4,
    name: '4.jpg',
    text: 'Еще стили'
  },
];

let scroll = new Scroll(4);
let slider = new Slider(images);