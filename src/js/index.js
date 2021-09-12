import '../sass/style.sass';
import slider from './slider';
import menu from './menu';
import smooth from './smooth';
import accordeon from './accordeon';
import modals from './modals';




window.addEventListener('DOMContentLoaded', function() {
  smooth();
  menu();
  accordeon();
  modals();

  console.log("it works");
    if (document.documentElement.clientWidth <= 767) {
      slider();
    }
    else if (document.documentElement.clientWidth >= 1366){

      let elem = document.querySelector('[data-menu]');
      const contentMain = document.querySelector('[data-content]');

      contentMain.insertBefore(elem, contentMain.firstChild);


      // window.addEventListener('resize', ()=> {
      //   let marginElem = window.getComputedStyle(document.querySelector('[data-content]')).marginRight;

      //   elem.style.marginLeft = parseInt(marginElem, 10)  - 320 + 'px';









    }



});
