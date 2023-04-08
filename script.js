function keyDown(event) {
  if(event.key === 'Enter') {
    calculate();
  }
}
function calculate() {
 const inputOrder = document.querySelector('.js-input-order');
 let inputValue = Number(inputOrder.value);
 console.log(inputValue);

 if(inputValue < 40) {
  inputValue += 10;
 } 
 document.querySelector('.display-amount').innerHTML = `$${inputValue}`;
}