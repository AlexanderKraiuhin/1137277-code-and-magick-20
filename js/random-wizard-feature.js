'use strict';

(function () {
  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  //var wizards = [];

  window.randomWizardFeature = function () {
    var randomFirstName = Math.floor(Math.random() * FIRST_NAME.length);
    var randomSecondName = Math.floor(Math.random() * SECOND_NAME.length);
    var wizardName = FIRST_NAME[randomFirstName] + ' ' + SECOND_NAME[randomSecondName];

    var randomWizardCoat = Math.floor(Math.random() * COAT.length);
    var wizardCoat = COAT[randomWizardCoat];

    var randomWizardEyes = Math.floor(Math.random() * EYES.length);
    var wizardEyes = EYES[randomWizardEyes];

    return {
      name: wizardName,
      coatColor: wizardCoat,
      eyesColor: wizardEyes
    };
  };

  //for (var j = 0; wizards.length < 4; j++) {
  //  wizards[j] = window.randomWizardFeature();
  //}
})();
