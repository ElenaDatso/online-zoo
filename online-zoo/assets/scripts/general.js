// $(document).ready(function () {

//   $('#hamburger').click(function () {
//     $(this).toggleClass('open');
//   });

// });

// "use strict"

const petCard0 = `<li id="animal-card-1" class="animal-card">
              <img
                src="../../assets/images/pandas.jpg"
                alt="photo-of-playing-giant-pandas"
                class="animal-photo"
              />
              <div class="img-darker"><p>GIANT PANDAS<br>
                Native to Southwest China</p></div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">GIANT PANDAS</p>
                  <p class="small-p">Native to Southwest China</p>
                </div>
                <img src="../../assets/images/veg-food.png" alt="fruits-icon" />
              </div>
            </li>`;

const petCard1 = `<li class="animal-card">
              <img src="../../assets/images/eagle.jpg" alt="photo-of-eagle" class="animal-photo"/>
              <div class="img-darker"><p>Eagles<br>
                Native to South America</p></div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">Eagles</p>
                  <p class="small-p">Native to South America</p>
                </div>
                <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                />
              </div>
            </li>`;

const petCard2 = ` <li  class="animal-card">
              <img
                src="../../assets/images/gorilla.jpg"
                alt="photo-of-gorilla"
                class="animal-photo"
              />
              <div class="img-darker"><p>GORILLAS<br>
                Native to Congo</p></div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">GORILLAS</p>
                  <p class="small-p">Native to Congo</p>
                </div>
                <img src="../../assets/images/veg-food.png" alt="fruits-icon" />
              </div>
            </li>`;

const petCard3 = `<li  class="animal-card">
              <img src="../../assets/images/sloth.jpg" alt="photo-of-sloth" class="animal-photo"/>
              <div class="img-darker"><p>TWO-TOED SLOTH<br>
                Mesoamerica, South America</p></div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">TWO-TOED SLOTH</p>
                  <p class="small-p">Mesoamerica, South America</p>
                </div>
                <img src="../../assets/images/veg-food.png" alt="fruits-icon" />
              </div>
            </li>`;
const petCard4 = `<li  class="animal-card">
              <img
                src="../../assets/images/cheetahs.jpg"
                alt="photo-of-cheetahs"
                class="animal-photo"
              />
              <div class="img-darker"><p>CHEETAHS<br>
                Native to Africa</p></div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">CHEETAHS</p>
                  <p class="small-p">Native to Africa</p>
                </div>
                <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                />
              </div>
            </li>`;
const petCard5 = `<li  class="animal-card">
              <img
                src="../../assets/images/gorilla2.jpg"
                alt="photo-of-gorilla2"
                class="animal-photo"
              />
              <div class="img-darker">
                <p>GORILLA<br>
                Native to Congo</p>
              </div>
              <div class="animal-descr">
                <div class="text-holder">
                  <p class="animal-name">GORILLA</p>
                  <p class="small-p">Native to Congo</p>
                </div>
                <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                />
              </div>
            </li>`;
const petCard6 = `<li  class="animal-card">
                <img
                src="../../assets/images/aligator.jpg"
                alt="photo-of-aligator"
                class="animal-photo"
                />
                <div class="img-darker">
                  <p>Aligator<br>
                  Native to Southeastern United States</p>
                </div>
                <div class="animal-descr">
                  <div class="text-holder">
                    <p class="animal-name">ALIGATOR</p>
                    <p class="small-p">Native to Southeastern United States</p>
                  </div>

                  <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                  />
                </div>
              </li>`;
const petCard7 = `<li class="animal-card">
                <img
                src="../../assets/images/penguin.jpg"
                alt="photo-of-pinguin"
                class="animal-photo"
                />
                <div class="img-darker">
                  <p>Aligator<br>
                  Native to Antarctica</p>
                </div>
                <div class="animal-descr">
                  <div class="text-holder">
                    <p class="animal-name">PINGUIN</p>
                    <p class="small-p">Native to Antarctica</p>
                  </div>

                  <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                  />
                </div>
              </li>`;
const petCard8 = `<li class="animal-card">
                <img
                src="../../assets/images/aligator.jpg"
                alt="photo-of-aligator"
                class="animal-photo"
                />
                <div class="img-darker">
                  <p>Aligator<br>
                  Native to Africa</p>
                </div>
                <div class="animal-descr">
                  <div class="text-holder">
                    <p class="animal-name">ALIGATOR</p>
                    <p class="small-p">Native to Africa</p>
                  </div>

                  <img
                  src="../../assets/images/meet-fish.png"
                  class="meat-img"
                  alt="meet-icon"
                  />
                </div>
              </li>`;
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

//-------------------------------------------pets-----------------------------------//
const petsLeftAr = document.getElementById('pets-arrow-left');
const petsRightAr = document.getElementById('pets-arrow-right');
const petCards = document.querySelectorAll('.animal-tile');
const petsLayout = document.querySelector('.animal-tile._active');
const hiddenPets = document.querySelector('.animal-tile._next');
let currentItem = 1;

console.log(petCards)

let isEnabledButton = true;

const cardsArray = [
  petCard0,
  petCard1,
  petCard2,
  petCard3,
  petCard4,
  petCard5,
  petCard6,
  petCard7,
];

let random = [];

let random2 = [];
createRandom2(); //generates random order for hidden cards
makeNewRandom();
displayCards(); //builds the layot of cards after generating random order

function createRandom2() {
  random2 = [];
  for (let i = Math.round(Math.random() * 10); random2.length < 6; ) {
    i = Math.round(Math.random() * 10);
    i > 5 || random2.includes(i)
      ? (i = Math.round(Math.random() * 10))
      : random2.push(i);
  }
}

function makeNewRandom() {
  random = [];
  for (let i = Math.round(Math.random() * 10); random.length < 6; ) {
    i = Math.round(Math.random() * 10);
    i > 5 || random.includes(i)
      ? (i = Math.round(Math.random() * 10))
      : random.push(i);
  }
}

function changeCurrent (n){
  currentItem === 1? currentItem = 0: currentItem = 1;
}

function hideItem(direction) {
  isEnabledButton = false;
  createRandom2();
  petCards[currentItem===1?0:1].innerHTML = `
  ${cardsArray[random2[0]]} 
  ${cardsArray[random2[1]]} 
  ${cardsArray[random2[2]]} 
  ${cardsArray[random2[3]]}
  ${cardsArray[random2[4]]}
  ${cardsArray[random2[5]]}
  `;
  petCards[currentItem].classList.add(direction);
  petCards[currentItem].addEventListener('animationend', function () {
    this.classList.remove('_active', direction);
    this.classList.add('_next');
  });
}

function showItem(direction) {
  petCards[currentItem].classList.add('_next', direction);
  petCards[currentItem].addEventListener('animationend', function () {
    this.classList.remove('_next', direction);
    
    this.classList.add('_active');
    isEnabledButton = true;

  });

}



function mooveHiddenToCenter() {
  document
    .querySelector('.animal-tile._next')
    .classList.add('from-left-to-center');
  document
    .querySelector('.animal-tile._next')
    .addEventListener('animationend', function () {
      this.classList.remove('_next', 'from-left-to-center');
      this.classList.add('_active');
      isEnabledButton = true;
    });
  // createRandom2();
  
  // displayHiddenCards();
  
}

function displayCards() {
  petsLayout.innerHTML = `
  ${cardsArray[random[0]]} 
  ${cardsArray[random[1]]} 
  ${cardsArray[random[2]]} 
  ${cardsArray[random[3]]}
  ${cardsArray[random[4]]}
  ${cardsArray[random[5]]}
  `;
}

function displayHiddenCards() {
  hiddenPets.innerHTML = `
  ${cardsArray[random2[0]]} 
  ${cardsArray[random2[1]]} 
  ${cardsArray[random2[2]]} 
  ${cardsArray[random2[3]]}
  ${cardsArray[random2[4]]}
  ${cardsArray[random2[5]]}
  `;
}
displayCards();
displayHiddenCards();




petsLeftAr.addEventListener('click', function(){
  if (isEnabledButton){
  hideItem('from-center-to-left');
  changeCurrent(currentItem);
  showItem('from-right-to-center');
  }
});
petsRightAr.addEventListener('click', function(){
  if (isEnabledButton){
    hideItem('from-center-to-right');
    changeCurrent(currentItem);
    showItem('from-left-to-center');


  }
  
});

//------------------------------- testimonials--------------------------------------//
const rangeInput = document.getElementById('range-input');
const allTestimonialItems = document.querySelectorAll('li.testimonial-item');


let startIndex = 0;
let endIndex = startIndex + 3;
console.log(allTestimonialItems[0]);
let previousIndex = 0;

const changeDisplayedItems = 

rangeInput.addEventListener('input', () => {
   setTimeout(() => {
     const mooveForward = rangeInput.value - previousIndex > 0 ? true : false;
     startIndex = rangeInput.value;
     endIndex = +rangeInput.value + 3;
     console.log(startIndex, endIndex, previousIndex)
     
     if (mooveForward) {
       console.log(mooveForward);
       previousIndex += 1;
       if (startIndex > 0) {
         allTestimonialItems[startIndex - 1].classList.add(
           'from-center-to-left'
         );
         allTestimonialItems[startIndex].classList.add('from-center-to-left');
         allTestimonialItems[+startIndex + 1].classList.add(
           'from-center-to-left'
         );
         allTestimonialItems[+startIndex + 2].classList.add(
           'from-center-to-left'
         );
         allTestimonialItems[+startIndex + 3].classList.add(
           'from-center-to-left'
         );
         allTestimonialItems[+startIndex].addEventListener(
           'animationend',
           function () {
             allTestimonialItems[startIndex - 1].classList.remove('_visible');
             allTestimonialItems[startIndex - 1].classList.add('_hidden');

             allTestimonialItems[startIndex - 1].classList.remove(
               'from-center-to-left'
             );
             allTestimonialItems[startIndex].classList.remove(
               'from-center-to-left'
             );
             allTestimonialItems[+startIndex + 1].classList.remove(
               'from-center-to-left'
             );
             allTestimonialItems[+startIndex + 2].classList.remove(
               'from-center-to-left'
             );
             allTestimonialItems[+startIndex + 3].classList.remove(
               'from-center-to-left'
             );
           }
         );
       }

       if (endIndex <= 10) {
         allTestimonialItems[endIndex].classList.remove('_hidden');
         allTestimonialItems[endIndex].classList.add('_visible');
       }
     } else {
       startIndex == 0 ? (previousIndex = 0) : (previousIndex -= 1);
       console.log(startIndex);
       allTestimonialItems[startIndex].classList.remove('_hidden');
       allTestimonialItems[startIndex].classList.add('_visible');

       allTestimonialItems[startIndex].classList.add('from-left-to-center');
       allTestimonialItems[+startIndex + 1].classList.add(
         'from-left-to-center'
       );
       allTestimonialItems[+startIndex + 2].classList.add(
         'from-left-to-center'
       );
       allTestimonialItems[+startIndex + 3].classList.add(
         'from-left-to-center'
       );
       allTestimonialItems[+startIndex + 4].classList.add(
         'from-left-to-center'
       );
       // allTestimonialItems[+startIndex +5].classList.add('from-center-to-right');

       allTestimonialItems[endIndex].addEventListener(
         'animationend',
         function () {
           allTestimonialItems[+endIndex].classList.remove('_hidden');
           allTestimonialItems[+endIndex].classList.add('_visible');

           allTestimonialItems[startIndex].classList.remove(
             'from-left-to-center'
           );

           allTestimonialItems[+startIndex].classList.remove(
             'from-left-to-center'
           );
           allTestimonialItems[+startIndex + 1].classList.remove(
             'from-left-to-center'
           );
           allTestimonialItems[+startIndex + 2].classList.remove(
             'from-left-to-center'
           );
           allTestimonialItems[+startIndex + 3].classList.remove(
             'from-left-to-center'
           );
           allTestimonialItems[+startIndex + 4].classList.remove(
             'from-left-to-center'
           );
         }
       );

       if (startIndex > 0) {
         allTestimonialItems[startIndex - 1].classList.remove('_visible');
         allTestimonialItems[startIndex - 1].classList.add('_hidden');
       }
     }

     // }
   }, 0); 
});

//-------------------------------------pop up---------------------------------------------//

const popUp = document.querySelector('.pop-up');
const cross = document.querySelector('.cross');
const overflow = document.querySelector('.testimolials-list');

popUp.addEventListener('click', function () {
  popUp.style.display = 'none';
  cross.style.display = 'none';
  overflow.style.overflow = 'hidden';
  body.classList.remove('_lock');
  for (let li of allTestimonialItems){
    if (li.classList.contains('over-pop-up')){
      li.classList.remove('over-pop-up');
    }
  }
})

cross.addEventListener('click', function () {
  popUp.style.display = 'none';
  cross.style.display = 'none';
  overflow.style.overflow = 'hidden';
  body.classList.remove('_lock');
  for (let li of allTestimonialItems) {
    if (li.classList.contains('over-pop-up')) {
      li.classList.remove('over-pop-up');
    }
  }
});

allTestimonialItems[0].addEventListener('click', function (){
  console.log('1');
  popUp.style.display = 'block';
  cross.style.display = 'block';
  overflow.style.overflow = 'visible';
  body.classList.add('_lock');
  this.classList.add('over-pop-up');

  
})

allTestimonialItems[1].addEventListener('click', function () {
  console.log('1');
  popUp.style.display = 'block';
  cross.style.display = 'block';
  overflow.style.overflow = 'visible';
  body.classList.add('_lock');
  this.classList.add('over-pop-up');
});

allTestimonialItems[2].addEventListener('click', function () {
  console.log('1');
  popUp.style.display = 'block';
  cross.style.display = 'block';
  overflow.style.overflow = 'visible';
  body.classList.add('_lock');
  this.classList.add('over-pop-up');
});

allTestimonialItems[3].addEventListener('click', function () {
  console.log('1');
  popUp.style.display = 'block';
  cross.style.display = 'block';
  overflow.style.overflow = 'visible';
  body.classList.add('_lock');
  this.classList.add('over-pop-up');
});


