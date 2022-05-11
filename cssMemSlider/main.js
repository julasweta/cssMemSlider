

var requestURL = './img.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var data = request.response;
  slider(data);
  // тут можна ще добавити функції
}



let sliderTrack = document.querySelector('.slider__track');
let sliderTrackText = document.querySelector('.slider__trackText');
let buttons = document.querySelector('.buttons');

  function slider(data) {
  for (let i = 0; i < data.length; i++){
    let itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    sliderTrack.append(itemDiv);

     let itemDivText = document.createElement('div');
    itemDivText.className = 'itemText';
    itemDivText.textContent = data[i].text
     sliderTrackText.append(itemDivText);

     let a = document.createElement('a');
     a.className = "link";
     a.href = data[i].img;
     itemDiv.append(a);

    let img = new Image();
    img.src = data[i].img;
    img.alt = 'pets'
    a.append(img);

    let button = document.createElement('div');
    button.className = ('btn');
    button.setAttribute('data', i)
    buttons.append(button)


  }
}



 /* Carousel Pets  */

window.onload = function () {

  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = document.querySelector('.slider__container');
  const track = document.querySelector('.slider__track');
  const trackText = document.querySelector('.slider__trackText');
  const items = document.querySelectorAll('.item');
  const itemsText = document.querySelectorAll('.itemText');
  const btn = document.querySelector('.btn');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;



  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  })

   itemsText.forEach((itemText) => {
     itemText.style.minWidth = `${itemWidth}px`;
   })

 btn.bind('click', function () {
   alert(this.name);
 });


  btn_left.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slidesToScroll ? movePosition : (itemsLeft * itemWidth);
    setPosition();
    checkBtns();
  })

  btn_right.addEventListener('click', () => {
    let itemsRight = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsRight >= slidesToScroll ? movePosition : (itemsRight * itemWidth);
    setPosition();
    checkBtns();
  })



  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
    trackText.style.transform = `translateX(${position}px)`;
  }




  const checkBtns = () => {
    if (position === 0) {
      btn_left.classList.add('disabled')
    } else {
      btn_left.classList.remove('disabled')
    }

    if (position <= -((itemsCount - slidesToShow) * itemWidth)) {
      btn_right.classList.add('disabled')
    } else {
      btn_right.classList.remove('disabled')
    }
  }
  checkBtns();
}
