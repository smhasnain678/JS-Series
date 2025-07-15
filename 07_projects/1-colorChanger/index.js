const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const selectedColorText = document.getElementById('selectedColorText')

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            const color = e.target.id;
            body.style.backgroundColor = color;
            selectedColorText.textContent = `${color} color selected`
        }
        if (e.target.id === 'white') {
            const color = e.target.id;
            body.style.backgroundColor = color;
            selectedColorText.textContent = `${capitalize(color)} color selected`
        }
        if (e.target.id === 'blue') {
            const color = e.target.id;
            body.style.backgroundColor = color;
            selectedColorText.textContent = `${capitalize(color)} color selected`
        }
        if (e.target.id === 'yellow') {
            const color = e.target.id;
            body.style.backgroundColor = color;
            selectedColorText.textContent = `${capitalize(color)} color selected`
        }
        if (e.target.id === 'purple') {
            const color = e.target.id;
            body.style.backgroundColor = color;
            selectedColorText.textContent = `${capitalize(color)} color selected`
        }
    })
});
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}