const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height:${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight:${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // to show result
    result.innerHTML = `<span>${bmi}<span/>`;

    if (result < 18.6) {
      result.innerHTML = `You are Under Weight try to put On weight as your BMI is ${bmi}`;
    } else if (result > 18.6 && result < 24.9) {
      result.innerHTML = `You are normal fir  as your BMI is ${bmi}`;
    } else result > 24.9;
    {
      result.innerHTML = `You are Over Weight try to loose your weight as your BMI is ${bmi}`;
    }
  }
});
