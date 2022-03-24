'use strict';
import _ from 'lodash';
import './style.css';
import home from './modules/home';
import nav from './modules/nav';
import footer from './modules/footer';
// import initialLoad  from './modules/initial-load';

// init()

function component() {
  const element = document.getElementById('content');
  element.innerHTML += nav();
  element.innerHTML += home();
  element.innerHTML += footer();
  
  return element;
}

// function init() {
//   initialLoad();
//   home();
// }

document.body.appendChild(component());