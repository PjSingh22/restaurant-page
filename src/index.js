'use strict';
import _ from 'lodash';
import './style.css';
import home from './modules/home';

function component() {
  const element = document.getElementById('content');
  element.innerHTML = home();
  
  return element;
}

document.body.appendChild(component());