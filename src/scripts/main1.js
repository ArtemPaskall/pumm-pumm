'use strict';

const svg = document.querySelector(['.shop__good-svg--3']);
const svg1 = document.querySelector(['.shop__good-svg--5']);

console.log(svg.childNodes);
console.log(svg.childNodes[0].id);
svg.childNodes[0].id = '999999';
console.log(svg.childNodes[1].attributes[0].nodeValue);
svg.childNodes[1].attributes[0].nodeValue = `url(#999999)`;
console.log(svg.childNodes[1].attributes[0].nodeValue);

svg1.childNodes[0].id = '777';
svg1.childNodes[1].attributes[0].nodeValue = `url(#777)`;

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
