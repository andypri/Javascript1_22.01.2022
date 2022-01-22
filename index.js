// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascript 1: 22.01.2022</h1>`;
appDiv.style.backgroundColor = 'violet';

import './ukol5.js';

// import nadefinované funkce:
import { obsahObdelniku } from './ukol5';
console.log(obsahObdelniku(1, 4));
