'use strict';

const sofasMask1 = document.querySelectorAll(['.mask1']);
// const sofasMask2 = document.querySelectorAll(['.mask2']);
const a = document.getElementById('a');

sofasMask1[0].id = '11111';
// sofasMask2[0].id = '22222';
console.log(a);

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
