/* eslint-disable */
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import M from 'materialize-css'

/*
  Init Materialize Modules
*/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.web-portfolio-slide');
  var options = {
    dist: 0,
    padding: 30
  };
  var instances = M.Carousel.init(elems, options);
});
