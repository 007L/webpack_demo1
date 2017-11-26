import $ from 'jquery';
import {square , cube} from './js/math';

import './assets/css/style.css';
import './assets/img/big.jpg';
import './assets/img/logo.jpg';
import data from './assets/json/data.json';


document.write('<br> 12的立方是'+ cube(12))
document.write('<br> '+JSON.stringify(data))
document.write('hello webpack!!');
$('body').css('background' , 'lightskyblue')