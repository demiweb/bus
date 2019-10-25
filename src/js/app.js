import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'intersection-observer';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import slider from './components/sliders/setSliders';
// import toggleHeader from './components/toggleHeader';
import toggleMenu from './components/toggleMenu';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();

  slider.init();
  // toggleHeader();
  toggleMenu();
});
