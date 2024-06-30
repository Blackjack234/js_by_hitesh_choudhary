# js_by_hitesh_choudhary_project

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-qembmu?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

## BMI Calculator

The following is a JavaScript code snippet for a BMI calculator:

```javascript
document.querySelector('form').addEventListener('submit', (e) => {
  try {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please provide a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please provide a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      // show result
      if (bmi < 18.6) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are under weight</span>`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are normal range</span>`;
      } else if (bmi > 24.9) {
        results.innerHTML = `<span>${bmi}</span><br> <span> you are over weight</span>`;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
});
```

## Display clock

The following is a JavaScript code snippet for a clock display:

```javascript
const clock = document.querySelector('#clock');


setInterval(()=>{
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

