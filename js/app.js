'use strict';
/*let button=document.getElementById('results-list');
button.addEventListener('click',) ;*/

let leftImageElement=document.getElementById('left-image');
let middleImageElement=document.getElementById('middle-image');
let rightImageElement=document.getElementById('right-image');
let divImageElement=document.getElementById('images-div');
//-----------
console.log(leftImageElement);
console.log(rightImageElement);
console.log(middleImageElement);
//---------
//----remeber change 10 to 25
let maxAttempts=25;
let userAttemptsCounter=0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

console.log(maxAttempts);
console.log(userAttemptsCounter);
console.log(leftImageIndex);
console.log(middleImageIndex);
console.log(rightImageIndex);


function Product(name,source){
  this.name=name;
  this.source=source;
  this.timeImageShown=0;
  this.votes=0;
  Product.allProducts.push(this);
}

Product.allProducts=[];


new Product('bag','assets/bag.jpg');
new Product('banana','assets/banana.jpg');
new Product('bathroom','assets/bathroom.jpg');
new Product('boots','assets/boots.jpg');
new Product('breakfast','assets/breakfast.jpg');
new Product('bubblegum','assets/bubblegum.jpg');
new Product('chair','assets/chair.jpg');
new Product('cthulhu','assets/cthulhu.jpg');
new Product('dog-duck','assets/dog-duck.jpg');
new Product('dragon','assets/dragon.jpg');
new Product('pen','assets/pen.jpg');
new Product('pet-sweep','assets/pet-sweep.jpg');
new Product('scissors','assets/scissors.jpg');
new Product('shark','assets/shark.jpg');
new Product('sweep','assets/sweep.png');
new Product('tauntaun','assets/tauntaun.jpg');
new Product('unicorn','assets/unicorn.jpg');
new Product('usb','assets/usb.gif');
new Product('water-can','assets/water-can.jpg');
new Product('wine-glass','assets/wine-glass.jpg');


//------this function from w3school
function generateRandomIndex() {

  return Math.floor(Math.random() * Product.allProducts.length);
}
console.log(generateRandomIndex());

//------render part
function renderThreeImages() {

  leftImageIndex=generateRandomIndex();
  middleImageIndex=generateRandomIndex();
  rightImageIndex=generateRandomIndex();


  while (leftImageIndex===rightImageIndex||leftImageIndex===middleImageIndex||middleImageIndex===rightImageIndex) {
    rightImageIndex=generateRandomIndex();

  }
  console.log(Product.allProducts[leftImageIndex].source);

  leftImageElement.src=Product.allProducts[leftImageIndex].source;
  middleImageElement.src=Product.allProducts[middleImageIndex].source;
  rightImageElement.src=Product.allProducts[rightImageIndex].source;


}
renderThreeImages();


divImageElement.addEventListener('click',handleUserClick);

let container=document.getElementById('container');

function handleUserClick(event) {

  console.log(event.target.id);

  userAttemptsCounter++;
  if (userAttemptsCounter<=maxAttempts) {

    if (event.target.id==='left-image') {

      Product.allProducts[leftImageIndex].votes++;

    }else if(event.target.id==='right-image'){
      Product.allProducts[rightImageIndex].votes++;
    }
    else{
      Product.allProducts[middleImageIndex].votes++;
    }

    console.log(Product.allProducts);
    renderThreeImages();

  }else{
    // show results

    let button=document.getElementById('results-list');
    console.log(button);
    button.addEventListener('click',showRusult);
    divImageElement.removeEventListener('click',handleUserClick);}}




function showRusult(){

  for (let i = 0; i <Product.allProducts.length; i++) {
    let productResult=document.createElement('li');

    container.append( productResult);

    productResult.textContent=`${Product.allProducts[i].name} has ${Product.allProducts[i].votes} votes, and was seen ${Product.allProducts[i].timeImageShown} times. `;

  }}
