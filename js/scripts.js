var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elOutput = document.querySelector('.js-output');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var userInputValue = Number(elInput.value);

  if(userInputValue === 1) {
    elOutput.textContent = 'Monday';
  } else if(userInputValue === 2) {
    elOutput.textContent = 'Tuesday';
  } else if(userInputValue === 3) {
    elOutput.textContent = 'Wednesday';
  }  else if(userInputValue === 4) {
    elOutput.textContent = 'Thursday';
  }  else if(userInputValue === 5) {
    elOutput.textContent = 'Friday';
  }  else if(userInputValue === 6) {
    elOutput.textContent = 'Saturday';
  }  else if(userInputValue === 7) {
    elOutput.textContent = 'Sunday';
  } else {
    elOutput.textContent = 'Error';
  }
});