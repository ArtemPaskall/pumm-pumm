'use strict';

// #  -- Change sofa color

const colorToggle = document.querySelectorAll(['.shop__colors']);

colorToggle.forEach(toggle => toggle.addEventListener('click', () => {
  const sofas = document.querySelectorAll(['.shop__sofa-svg']);

  const selectedColor = window.getComputedStyle(toggle).backgroundColor;
  const opacity = window.getComputedStyle(toggle).opacity;

  const selectedColorRGBA
  = `${selectedColor.slice(0, 3)}a${selectedColor.slice(3, -1)}, ${opacity})`;

  sofas.forEach(sofa => {
    sofa.style.fill = selectedColorRGBA;
  });
}));

const svgSofa1 = document.querySelector(['.shop__good-svg--3']);
const svgSofa2 = document.querySelector(['.shop__good-svg--5']);

svgSofa1.childNodes[0].id = 'mask0_1_3009';
svgSofa1.childNodes[1].attributes[0].nodeValue = 'url(#mask0_1_3009)';

svgSofa2.childNodes[0].id = 'mask0_1_30097';
svgSofa2.childNodes[1].attributes[0].nodeValue = 'url(#mask0_1_30097)';

// #  -- Active color style

const colorSelectors = document.querySelectorAll(['.shop__colors-wraper']);

colorSelectors.forEach(selector =>
  selector.addEventListener('click', function() {
    const current
    = document.getElementsByClassName('shop__colors-wraper--is-active');

    current[0].className
    = current[0].className.replace(' shop__colors-wraper--is-active', '');
    this.className += ' shop__colors-wraper--is-active';
  }));

// #  -- Reload page prevent

const form = document.getElementById('mail-form');

form.addEventListener(
  'submit', function(event) {
    event.preventDefault();
  });

// #  -- Scroll disable on menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// #  -- Slider for shop gallery

let count = 0;
const galleryWrap = document.querySelector('.shop__gallery-wrap');
const gallery = document.querySelector('.shop__gallery');
const galleryItem = document.querySelector('.shop__good-item');
const galleryItems = document.querySelectorAll('.shop__good-item');
let imageWidth;

function init() {
  const screenWidth = document.body.clientWidth;

  galleryWrap.style.width = `${screenWidth - 50}px`;

  if (screenWidth <= 768) {
    gallery.style.gridTemplateColumns = `repeat(5, ${screenWidth - 50}px)`;
    rollSlider();
  } else {
    gallery.style.gridTemplateColumns = '';
    gallery.style.left = 0;
    rollSlider();
    gallery.style.transform = `translate(0px)`;
  }
}

init();

window.addEventListener('resize', init);

document.querySelector(['.shop-slider__button--next'])
  .addEventListener('click', function() {
    count++;

    if (count >= galleryItems.length) {
      count = 0;
    }
    rollSlider();
  });

document.querySelector(['.shop-slider__button--prev'])
  .addEventListener('click', function() {
    count--;

    if (count < 0) {
      count = galleryItems.length - 1;
    }
    rollSlider();
  });

function rollSlider() {
  imageWidth = (window.getComputedStyle(galleryItem).width).slice(0, -2);
  gallery.style.transform = `translate(-${count * imageWidth}px)`;
}
