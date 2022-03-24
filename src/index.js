'use strict';
import _ from 'lodash';
import './style.css';
import home from './modules/home';
import nav from './modules/nav';
import { header, footer } from './modules/initial-load';
import initialLoad  from './modules/initial-load';

// work on this later

function init() {
  const element = document.getElementById('content');
  element.innerHTML += header()
  element.innerHTML += home();
  element.innerHTML += footer();
}

init();

function buttonListeners() {
  const homeBtn = document.querySelector('.home')
  const menuBtn = document.querySelector('.menu')
  const contactBtn = document.querySelector('.contact')
  const mainContent = document.querySelector('.landing-info')
  console.log(homeBtn)
  homeBtn.addEventListener('click', () => {
    mainContent.innerHTML = home();
  });
  menuBtn.addEventListener('click', () => {
    mainContent.innerHTML = `<p>Menu Coming Soon!</p>`;
  })
}

buttonListeners();