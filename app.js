let form = document.forms.calculator;

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
    let initial = +form.money.value;
    if(!initial) return;

    let interest = form.interest.value * 0.01;
    if(!interest) return;

    let year = form.months.value / 12;
    if(!year) return;

    let result = Math.round(initial * (1 + interest * year));
    let height = result / form.money.value * 100 + 'px';

    document.getElementById('height-after').style.height = height;
    document.getElementById('money-before').innerHTML = (+form.money.value).toLocaleString();
    document.getElementById('money-after').innerHTML = result.toLocaleString();
}
calculate();
