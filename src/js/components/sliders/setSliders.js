import Slider from './Slider';
import classNames from './classNames';

class MySlider {
  constructor(slider) {
    this.sliderClass = slider;
    this.sliders = [];
  }

  _getOptions() {
    this.getOptions = ({
      container, navigation, pagination, onInit,
    }) => ({
      hero: {
        navigation,
        on: {
          init: onInit,
        },
        loop: true,
        pagination: {
          el: pagination,
          type: 'bullets',
          bulletElement: 'button',
          clickable: true,
        },
        autoplay: {
          delay: 4000,
        },
        noSwiping: false,
        breakpoints: {
          768: {
            noSwiping: true,
          },
        },
      },
      gallery: {
        navigation,
        on: {
          init: onInit,
        },
        // loop: true,
      },
      thumbs: {
        slidesPerView: 3,
        on: {
          init: onInit,
        },
        spaceBetween: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          992: {
            spaceBetween: 30,
          },
          768: {
            spaceBetween: 15,
          },
        },
      },
    });
  }

  _initSliders() {
    this.containers.forEach((container) => {
      if (container.classList.contains(classNames.plugin.initialized)) return;

      const name = container.dataset.slider;

      const slider = new Slider(container, this.getOptions);
      if (name !== 'gallery') {
        slider.init();
      }

      this.sliders = [...this.sliders, slider];
    });

    this.initGallerySlider();
  }

  initGallerySlider() {
    const gallerySliders = this.containers.filter((container) => container.dataset.slider === 'gallery');
    if (!gallerySliders.length) return;

    const [thumbsSlider] = this.sliders.filter((slider) => slider.name === 'thumbs');
    this.thumbsSlider = thumbsSlider.swiper;

    this.sliders.forEach((sliderObj) => {
      const slider = sliderObj;
      if (slider.name === 'gallery') {
        slider.options.thumbs = {
          swiper: this.thumbsSlider,
        };
        slider.init();
      }
    });
  }


  init() {
    this.containers = [...document.querySelectorAll(this.sliderClass)];
    if (!this.containers.length) return;

    this._getOptions();
    this._initSliders();
  }
}

const slider = new MySlider('.js-slider');
export default slider;
