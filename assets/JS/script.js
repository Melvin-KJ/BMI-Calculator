const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
  event.preventDefault(); //Prevents form from refreshing the page

  const weight = document.getElementById('weight').value;
  //height is given in meters. To convert to cm => multiply by 100.
  const height = document.getElementById('height').value;

  const bmi = (weight / (height * height)).toFixed(2);
  console.log(bmi);
  const value = document.getElementById('value');

  let description = '';

  value.classList.add('attention');

  document.getElementById('infos').classList.remove('hidden'); //show info section

  if (bmi < 18.5) {
    description = 'Underweight';
    value.classList.remove('attention');
    value.classList.add('abnormal');
  } else if (bmi >= 18.5 && bmi < 25) {
    description = 'Normal weight';
    value.classList.remove('attention');
    value.classList.add('normal');
  } else if (bmi >= 25 && bmi < 30) {
    description = 'Overweight';
  } else if (bmi >= 30 && bmi < 35) {
    description = 'Class I obesity';
  } else if (bmi >= 35 && bmi < 40) {
    description = 'Class II obesity';
  } else {
    description = 'Class III obesity';
  }

  value.textContent = bmi;
  document.getElementById('description').textContent = description;
});
