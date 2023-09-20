"use strict";

const calculateBtn = document.querySelector("button");
const userInputField = document.querySelector("#date-input-field");
const ageResultEl = document.querySelector(".age-result");
userInputField.max = new Date().toISOString().split("T")[0];
// console.log(userInputField.max);

const getDaysInMonth = function (year, month) {
  return new Date(year, month, 0).getDate();
};
const calculateAge = function () {
  let birthDate = userInputField.value;
  if (!birthDate) return;
  birthDate = new Date(birthDate);
  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.getMonth() + 1;
  const birthYear = birthDate.getFullYear();

  const today = new Date();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let yearDifference = currentYear - birthYear;
  let monthDifference;
  let dateDifference;

  if (currentMonth >= birthMonth) {
    monthDifference = currentMonth - birthMonth;
  } else {
    yearDifference--;
    monthDifference = currentMonth + 12 - birthMonth;
  }

  if (currentDate >= birthDay) {
    dateDifference = currentDate - birthDay;
  } else {
    monthDifference--;
    dateDifference =
      getDaysInMonth(birthYear, birthMonth) + currentDate - birthDay;
  }
  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }
  ageResultEl.innerHTML = `You are <span>${yearDifference}</span> years, <span>${monthDifference}</span> months, <span>${dateDifference}</span> days old`;
};

calculateBtn.addEventListener("click", calculateAge);
