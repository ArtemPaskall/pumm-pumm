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

// let offset = 0;
// const sliderLine = document.querySelector('.shop__gallery');

// document.querySelector(['.shop-slider__prev-button'])
//   .addEventListener('click', function() {
//     offset -= 450;

//     if (offset < -900) {
//       offset = 900;
//     }
//     sliderLine.style.left = -offset + 'px';
//   });

// document.querySelector(['.shop-slider__next-button'])
//   .addEventListener('click', function() {
//     offset += 450;

//     if (offset > 900) {
//       offset = -900;
//     }
//     sliderLine.style.left = -offset + 'px';
//   });

const widthItem = document.querySelector('.shop__good-item')
  .getBoundingClientRect().width;

let offset = 0;
const step = widthItem;
const sliderLine = document.querySelector('.shop__gallery');

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
