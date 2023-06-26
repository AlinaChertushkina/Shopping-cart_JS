
const price1 = parseFloat(document.querySelector('.price1').innerHTML);
const price2 = parseFloat(document.querySelector('.price2').innerHTML);
const price3 = parseFloat(document.querySelector('.price3').innerHTML);
const price4 = parseFloat(document.querySelector('.price4').innerHTML);

function totalPrice(a, b, c, d) {
    return a + b + c + d;
}

let totalPriceCalc = totalPrice(price1, price2, price3, price4);


let total = document.getElementById('total');
total.innerHTML = totalPriceCalc;

const button = document.querySelector('button');
const discountRate = 20;

button.addEventListener('click', function discount() {
    let discountCalc = discountRate * totalPriceCalc / 100;
});


