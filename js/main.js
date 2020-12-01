const mainElement = document.querySelector('.main');
const menuBurger = document.querySelector('.menu-burger');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav-bar');

// Functions

function pointClickHandler(pointType) {
  removeClass();
  addActiveClass(findNodeByAttribute(pointType));
  mainElement.setAttribute('current-slide', pointType);
}

function navLinkClickHandler(pointType) {
  removeClass();
  addActiveClass(findNodeByAttribute(pointType));
  mainElement.setAttribute('current-slide', pointType);
  wrapper.classList.remove('menu-active');
  nav.classList.remove('active');
}

function removeClass() {
  const nodeList = document.querySelectorAll('.point');
  nodeList.forEach((item) => {
    item.classList.remove('active');
  });
}

function findNodeByAttribute(pointType) {
  return document.querySelector(`div[point-type="${pointType}"]`);
}

function addActiveClass(nodeElement) {
  nodeElement.classList.add('active');
}

// Events 

document.addEventListener('DOMContentLoaded', () => {
  const nodes = [
    '.slide-home',
    '.slide-about',
    '.slide-works',
    '.slide-contact',
    '.slide-hire',
    '.nav-bar'
  ];
  nodes.forEach((item) => {
    document.querySelector(`${item}`).classList.add('transition-style');
  });
});

menuBurger.addEventListener('click', () => {
  wrapper.classList.add('menu-active');
  nav.classList.add('active');
});
