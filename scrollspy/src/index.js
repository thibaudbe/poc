// import { toArray } from './utils/array';
import debounce from './utils/debounce';
import scrollSpy from './utils/scrollSpy';
import { getCurrentY } from './utils/onScroll';


const titles = document.querySelectorAll('h2');

const anim = debounce(e => {
  getCurrentY(currentY => scrollSpy(titles, currentY));
}, 50);


window.onload =
  window.onresize =
    window.onscroll = e => anim(e);
