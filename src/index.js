'use strict';
import _ from 'lodash';
import './style.css';
import home from './modules/home';
import { header, footer } from './modules/initial-load';
import menu from './modules/menu';
import contact from './modules/contact';

function init() {
  const element = document.getElementById('content');
  element.innerHTML += header()
  element.innerHTML += home();
  element.innerHTML += footer();
}

init();

function buttonListeners() {
  const homeBtn = document.querySelector('.home');
  const menuBtn = document.querySelector('.menu');
  const contactBtn = document.querySelector('.contact');
  const mainContent = document.querySelector('.landing-info');

  homeBtn.addEventListener('click', () => {
    mainContent.innerHTML = home();
  });
  menuBtn.addEventListener('click', () => {
    mainContent.innerHTML = menu();
  });
  contactBtn.addEventListener('click', () => {
    mainContent.innerHTML = contact();
  });
}

buttonListeners();