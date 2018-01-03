const jquery = require('jquery');
window.$ = window.jQuery = jquery;

require('../../node_modules/bootstrap/dist/js/bootstrap');

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../css/styles.css';

$('document').ready(() => {
  console.log('It works!');
});
