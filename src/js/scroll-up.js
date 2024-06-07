'use strict';

const elScrollBtn = document.querySelector('.scroll-btn');

let lastScrollTop = 0;
export let switchScroll = true;

window.addEventListener('scroll', e => {
  let currentScrollTop = window.scrollY;

  if (currentScrollTop < lastScrollTop && switchScroll) {
    elScrollBtn.classList.add('is-active-scroll');
    switchScroll = false;
  } else if (currentScrollTop > lastScrollTop && !switchScroll) {
    elScrollBtn.classList.remove('is-active-scroll');
    switchScroll = true;
  } else if (currentScrollTop === 0) {
    elScrollBtn.classList.remove('is-active-scroll');
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

elScrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  elScrollBtn.classList.remove('is-active-scroll');
});












export { elScrollBtn } ;