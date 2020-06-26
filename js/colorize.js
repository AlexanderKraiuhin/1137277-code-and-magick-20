'use strict';

(function () {
  var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var changeColor = function (arr) {
    var index = 0;
    return function () {
      if (index + 1 > arr.length - 1) {
        index = 0;
      } else {
        index++;
      }
      return arr[index];
    };
  };

  window.colorize = function (element) {
    var colorCoat = changeColor(COAT);
    var colorEyes = changeColor(EYES);
    var colorFireball = changeColor(FIREBALLS);

    element.addEventListener('click', function () {

      if (element.classList.contains('setup-fireball-wrap')) {
        element.style.backgroundColor = colorFireball();
      } else if (element.classList.contains('wizard-coat')) {
        element.style.fill = colorCoat();
      } else if (element.classList.contains('wizard-eyes')) {
        element.style.fill = colorEyes();
      }
    });
  };
})();
