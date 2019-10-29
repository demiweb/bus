import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'intersection-observer';
import './lib/polyfill';
import Stickyfill from 'stickyfilljs';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import slider from './components/sliders/setSliders';
// import toggleHeader from './components/toggleHeader';
import toggleMenu from './components/toggleMenu';
import setGallery from './components/setGallery';
import setAccordion from './components/setAccordion';
import setPopups from './components/setPopups';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();

  const elements = document.querySelectorAll('.js-sticky-polyfill');
  Stickyfill.add(elements);

  slider.init();
  // toggleHeader();
  toggleMenu();
  setGallery();
  setAccordion();
  setPopups();
});
