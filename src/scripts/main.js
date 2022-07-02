'use strict';

const svgSofa1 = document.querySelector(['.shop__good-svg--3']);
const svgSofa2 = document.querySelector(['.shop__good-svg--5']);

svgSofa1.childNodes[0].id = 'mask0_1_3009';
svgSofa1.childNodes[1].attributes[0].nodeValue = 'url(#mask0_1_3009)';

svgSofa2.childNodes[0].id = 'mask0_1_30097';
svgSofa2.childNodes[1].attributes[0].nodeValue = 'url(#mask0_1_30097)';

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

const colorSelectors = document.querySelectorAll(['.shop__colors-wraper']);

colorSelectors.forEach(selector =>
  selector.addEventListener('click', function() {
    const current
    = document.getElementsByClassName('shop__colors-wraper--is-active');

    current[0].className
    = current[0].className.replace(' shop__colors-wraper--is-active', '');
    this.className += ' shop__colors-wraper--is-active';
  }));

const form = document.getElementById('mail-form');

form.addEventListener(
  'submit', function(event) {
    event.preventDefault();
  });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// #  -- Slider for shop gallery

const widthItemCount = () => document.querySelector('.shop__good-item')
  .getBoundingClientRect().width;

let offset = 0;
const step = widthItemCount();
const sliderLine = document.querySelector('.shop__gallery');

window.addEventListener('resize', function() {
  const screenWidth = document.body.clientWidth;
  const sliderWidth = document.querySelector('.shop__gallery-wrap');

  sliderWidth.style.width = `${screenWidth - 100}px`;
  console.log(getComputedStyle(sliderWidth).width);

  if (screenWidth > 768) {
    sliderWidth.style.width = 'auto';
    sliderLine.style.left = 0 + 'px';
    sliderLine.style.gridTemplateColumns = `repeat(6, minmax(100px, 1fr))`;
  }

  if (screenWidth > 1280) {
    sliderWidth.style.width = 'auto';
    sliderLine.style.gridTemplateColumns = `repeat(4, minmax(200px, 1fr))`;
  }

  if (screenWidth < 768) {
    sliderLine.style.gridTemplateColumns = `repeat(5, ${screenWidth - 100}px)`;
  }

  console.log(getComputedStyle(sliderLine).gridTemplateColumns);
});

// console.log(sliderLine.style);
// console.log(getComputedStyle(sliderLine).gridTemplateColumns);

document.querySelector(['.shop-slider__prev-button'])
  .addEventListener('click', function() {
    offset -= step;

    if (offset < -(2 * step)) {
      offset = (2 * step);
    }
    sliderLine.style.left = -offset + 'px';
  });

document.querySelector(['.shop-slider__next-button'])
  .addEventListener('click', function() {
    offset += step;

    if (offset > (2 * step)) {
      offset = -(2 * step);
    }
    sliderLine.style.left = -offset + 'px';
  });


