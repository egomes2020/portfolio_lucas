
/* javascript materialize */

$(document).ready(function () {
    $(".button-collapse").sideNav();
   /*  $('.collapsible').collapsible(); */
    $('.scrollspy').scrollSpy();





    /* SCROLLFIRE */
    var options = [
        {selector: '.cards', offset: 200, callback: customCallbackFunc },
        {selector: '.other-class', offset: 200, callback: function() {
          customCallbackFunc();
        } },
      ];
      Materialize.scrollFire(options);
})





/* personal script */

const input = document.getElementById('checkbox-menu');



function lostClass() {
  const menu = document.getElementById('menu-container');
  menu.classList.remove('menu-container');
}

input.addEventListener('load', lostClass);


function toggle() {
  const menu = document.getElementById('menu-container');
  menu.classList.add('menu-container-out');
}

input.addEventListener('click', toggle);

