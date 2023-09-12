/** @format */

const { Given, When, Then } = require("cucumber");

Given("User is located on the main page of saucedemo website", function () {
  // Код для перевірки, що користувач знаходиться на головній сторінці saucedemo
});

When('User clicks "Login" button', function () {
  // Код для кліку на кнопку "Login"
});

Then(
  'User should see "Epic sadface: Username is required" error message',
  function () {
    // Код для перевірки, що користувач бачить відповідне повідомлення про помилку
  }
);
