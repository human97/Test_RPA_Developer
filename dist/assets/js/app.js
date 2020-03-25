"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// №1 функция сортировки числовых значений
var array = [7, 0, 9, 4, 8, 1, 6, 2, 5, 3];

var sortFunction = function sortFunction(arr, mode) {
  return arr.sort(function (a, b) {
    return mode ? a - b : b - a;
  });
};

console.log(sortFunction(array, false)); // №3 web-форму для отправки контактных данных

var contactForm = document.getElementById('contact_form');
var inpRule = contactForm.querySelectorAll('input[data-rule]'); // получил все input data-rule

var check; // регулярное выражение

var inputName = contactForm.querySelector('.name');
var inputTel = contactForm.querySelector('.tel');
var comment = contactForm.querySelector('.textarea');
var btnSubmit = contactForm.querySelector('.contact_form--btn'); // проверка

function validation() {
  var rule = this.dataset.rule;
  var value = this.value;

  switch (rule) {
    case 'name':
      check = /\D/.test(value); // регулярка для имени

      break;

    case 'number':
      check = /^[\+|\-]?\d+$/.test(value); // регулярка для номера

      break;
  }

  contactForm.classList.remove('invalid');
  this.classList.remove('invalid');
  this.classList.remove('valid');

  if (check) {
    this.classList.add('valid');
  } else {
    this.classList.add('invalid');
  }
}

var _iterator = _createForOfIteratorHelper(inpRule),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var input = _step.value;
    input.addEventListener('input', validation);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  var name = inputName.value.trim();
  var tel = inputTel.value.trim();
  var text = comment.value.trim();

  if (check && name !== '' && tel !== '') {
    inputName.classList.remove('invalid');
    inputName.classList.remove('valid');
    inputTel.classList.remove('invalid');
    inputTel.classList.remove('valid');
    contactForm.classList.remove('invalid');
    inputName.value = '';
    inputTel.value = '';
  } else {
    contactForm.classList.add('invalid');
  }
});