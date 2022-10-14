//-----------------------menu-------------------------------------//
const hamburger = document.getElementById('hamburger2');
const mobileBg = document.getElementById('mobile-menu-bg');
const header = document.getElementById('header');
const body = document.querySelector('body');

function tog() {
  if (hamburger.classList.contains('open')) {
    hamburger.classList.remove('open');
    header.classList.remove('mobile-menu');
    mobileBg.classList.remove('_active');
    body.classList.remove('_lock');
  } else {
    hamburger.classList.add('open');
    header.classList.add('mobile-menu');
    mobileBg.classList.add('_active');
    body.classList.add('_lock');
  }
}

hamburger.addEventListener('click', tog);
mobileBg.addEventListener('click', tog);

//----------------------------------------Amount-------------------------------------//

let amountInput = document.getElementById('amount-input');

const sum25 = document.querySelector('.sum25');
const sum50 = document.querySelector('.sum50');
const sum100 = document.querySelector('.sum100');
const sum250 = document.querySelector('.sum250');
const sum500 = document.querySelector('.sum500');
const sum1000 = document.querySelector('.sum1000');
const sum2000 = document.querySelector('.sum2000');
const sum5000= document.querySelector('.sum5000');

const allRadioButtons = document.querySelectorAll('div.input-label-holder')
const allCheckedImages = document.querySelectorAll('.choose-amount .input-label-holder input[type=radio] + label img:last-of-type')
const checkedSum = document.querySelector('.choose-amount .input-label-holder input[type=radio]:checked + label img');
const allRadioInputs = document.querySelectorAll('.input-label-holder input');

sum5000.addEventListener('click', setAmount.bind(this,5000));
sum2000.addEventListener('click', setAmount.bind(this,2000));
sum1000.addEventListener('click', setAmount.bind(this,1000));
sum500.addEventListener('click', setAmount.bind(this,500));
sum250.addEventListener('click', setAmount.bind(this,250));
sum100.addEventListener('click', setAmount.bind(this,100));
sum50.addEventListener('click', setAmount.bind(this,50));
sum25.addEventListener('click', setAmount.bind(this,25));

function setAmount (sum) {
    amountInput.value = sum;
    for (let img of allCheckedImages){
        img.style.display = 'none';
    }
    document.querySelector('.choose-amount .input-label-holder input[type=radio]:checked + label img:last-of-type').style.display = 'inline';

}

amountInput.addEventListener('input', function(){
  if (amountInput.value.length > 4) {
    alert('The number should consist og 4 digits or less');
    for (let img of allCheckedImages) {
      img.classList.contains('checked') ? (img.style.display = 'none') : 0;
    }

    return (amountInput.value = amountInput.ariaPlaceholder);
  }

  if (
    amountInput.value != 25 ||
    amountInput.value != 50 ||
    amountInput.value != 100 ||
    amountInput.value != 250 ||
    amountInput.value != 500 ||
    amountInput.value != 1000 ||
    amountInput.value != 2000 ||
    amountInput.value != 5000
  ) 
  
  {
    for (let inp of allRadioInputs) {
      
        inp.checked = false;
        console.log(inp);
      
    }
    for (let img of allCheckedImages) {
      img.classList.contains('checked') ? (img.style.display = 'none') : 0;
    }
  }
  if (
    amountInput.value == 25 ||
    amountInput.value == 50 ||
    amountInput.value == 100 ||
    amountInput.value == 250 ||
    amountInput.value == 500 ||
    amountInput.value == 1000 ||
    amountInput.value == 2000 ||
    amountInput.value == 5000 
    
  ) {
    for (let inp of allRadioInputs) {
      if (inp.value == amountInput.value){
        inp.checked = true;
        document.querySelector('input[type="radio"]:checked+label img.checked').style.display = 'inline';
        
        console.log(inp);
      } 
    }
    for (let img of allCheckedImages) {
      img.classList.contains('checked') ? 0 : (img.style.display = 'inline');
    }
  }
})


