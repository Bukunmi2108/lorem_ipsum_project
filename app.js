const lorem = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  ]

const form = document.querySelector('.lorem_form');
const amount = document.getElementById('amount');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');



form.addEventListener('submit', function (e) {
  e.preventDefault();
  let display = '';
  const value = amount.value;
  let ran = Math.floor(Math.random() * lorem.length);
  let tempText = [];
  
  if (!value) {
    display = lorem[ran];
    result.textContent = display;
  }
  else {
    tempText = lorem.slice(0,value);
    tempText = tempText.map(
      function(i) {
        return `<p>${i}</p>`
      }
    ).join("")
    result.innerHTML = tempText;
  }
  result.style.padding = '10px'

})