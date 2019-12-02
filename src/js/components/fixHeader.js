import { throttle } from 'throttle-debounce';
import { IS_FIXED } from '../constants';

export default () => {
  function fixHeader() {
    if (!window.matchMedia('(min-width: 1200px)').matches) return;
    const header = document.querySelector('.header');

    if (!header) return;

    const headerTop = header.querySelector('.header__top');
    const headerBottom = header.querySelector('.header__bottom');
    if (!headerTop || !headerBottom) return;
    const top = headerTop.offsetHeight;

    if (window.pageYOffset >= top) {
      headerBottom.classList.add(IS_FIXED);
    } else {
      headerBottom.classList.remove(IS_FIXED);
    }
  }

  const onScroll = throttle(66, fixHeader);
  window.addEventListener('scroll', onScroll);
};
