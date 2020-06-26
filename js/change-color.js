'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize(wizardCoat);
  window.colorize(fireball);
  window.colorize(wizardEyes);
})();
