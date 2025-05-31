// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const results = document.getElementById('results');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const height = parseFloat(heightInput.value);//convert input to float
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {// Validate input
      results.innerHTML = `<p style="color: red;">Please enter valid height and weight values.</p>`;//innerHTML to display error message if any input is invalid
      return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let message = `<p>Your BMI is <strong>${bmi}</strong></p>`;

    if (bmi < 18.6) {
      message += `<p style="color: orange;">You are underweight.</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += `<p style="color: green;">You are in the normal range.</p>`;
    } else {
      message += `<p style="color: red;">You are overweight.</p>`;
    }

    results.innerHTML = message;
  });
});
