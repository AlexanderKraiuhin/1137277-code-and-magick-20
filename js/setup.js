'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizards = [];

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var WIZARD_FEATURE = setup.querySelector('.setup-wizard');
var WIZARD_COAT = WIZARD_FEATURE.querySelector('.wizard-coat');
var WIZARD_EYES = WIZARD_FEATURE.querySelector('.wizard-eyes');
var WIZARD_FIREBALL = document.querySelector('.setup-fireball-wrap');

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

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var coatIndex = 0;
var eyesIndex = 0;
var fireballIndex = 0;

var changeCoatColor = function () {
  if (coatIndex + 1 > COAT.length - 1) {
    coatIndex = 0;
  } else {
    coatIndex++;
  }
  WIZARD_COAT.style.fill = COAT[coatIndex];
};

var changeEyesColor = function () {
  if (eyesIndex + 1 > EYES.length - 1) {
    eyesIndex = 0;
  } else {
    eyesIndex++;
  }
  WIZARD_EYES.style.fill = EYES[eyesIndex];
};

var changeFireballColor = function () {
  if (fireballIndex + 1 > FIREBALLS.length - 1) {
    fireballIndex = 0;
  } else {
    fireballIndex++;
  }
  WIZARD_FIREBALL.style.backgroundColor = FIREBALLS[fireballIndex];
};

WIZARD_COAT.addEventListener('click', changeCoatColor);

WIZARD_EYES.addEventListener('click', changeEyesColor);

WIZARD_FIREBALL.addEventListener('click', changeFireballColor);
