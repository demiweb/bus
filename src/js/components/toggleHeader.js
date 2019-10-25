import { throttle } from 'throttle-debounce';
import { IS_FIXED } from '../constants';

class Header {
  constructor(header) {
    this.header = header;
    this.OFFSET = header.offsetHeight;
  }

  toggle() {
    if (!window.matchMedia('(min-width: 1200px)').matches) {
      this.header.classList.remove(IS_FIXED);
      return;
    }
    if (window.pageYOffset > this.OFFSET) {
      this.header.classList.add(IS_FIXED);
    } else {
      this.header.classList.remove(IS_FIXED);
    }
  }

  _toggle() {
    this.onScroll = throttle(66, this.toggle.bind(this));
    window.addEventListener('scroll', this.onScroll);
  }

  init() {
    this._toggle();
  }
}

export default function toggleHeader() {
  const header = document.querySelector('.js-header');
  if (!header) return;

  const h = new Header(header);
  h.init();
}
