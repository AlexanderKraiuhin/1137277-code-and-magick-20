'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var randomWizardFeature = function () {
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

for (var j = 0; wizards.length < 4; j++) {
  wizards[j] = randomWizardFeature();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
