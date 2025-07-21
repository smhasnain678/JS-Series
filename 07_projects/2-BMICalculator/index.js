const form = document.querySelector('form')

// this usecase give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#guide')

    if (height == "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${bmi}</span>`
        const bmiValue = parseFloat(bmi);
        if (bmiValue < 18.6) {
            guide.innerHTML = `<p style="color: orange;">You are Under Weight</p>`;
        } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
            guide.innerHTML = `<p style="color: green;">You are in Normal Range</p>`;
        } else {
            guide.innerHTML = `<p style="color: red;">You are Overweight</p>`;
        }
    }
});