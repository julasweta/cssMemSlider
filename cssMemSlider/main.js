const screenWidth = window.innerWidth;

  fetch('./img.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {


      let sliderTrack = document.querySelector('.slider__track');
      let sliderTrackText = document.querySelector('.slider__trackText');
      let buttons = document.querySelector('.buttons');


      for (let i = 0; i < (data.length); i++) {

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

        let button = document.createElement('a');
        button.className = ('btn');
        button.href = '#' + i;
        button.setAttribute('data', i)
        buttons.append(button)

      }



      /* Carousel img  */

      let position = 0;
      const slidesToShow = 1;
      /*  const slidesToScroll = 1; */
      const container = document.querySelector('.slider__container');
      const track = document.querySelector('.slider__track');
      const trackText = document.querySelector('.slider__trackText');
      const items = document.querySelectorAll('.item');
      const itemsText = document.querySelectorAll('.itemText');
      const btns = document.querySelectorAll('.btn');
      /* const itemsCount = items.length; */
      const itemWidth = container.clientWidth / slidesToShow;
      /* const movePosition = slidesToScroll * itemWidth;  //640 */


      items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
      })


      itemsText.forEach((itemText) => {
        itemText.style.minWidth = `${itemWidth}px`;
      })



      btns.forEach((btn) => {
        btn.addEventListener("mouseover", (e) => {
          let btn_data = e.target
          let data = btn_data.getAttribute('data')
          position = (data * (-itemWidth));
          setPosition();
          btn.classList.toggle("active");
          trackText.classList.toggle('activetext');
        })

      })

      btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          let btn_data = e.target
          let data = btn_data.getAttribute('data')
          position = (data * (-itemWidth));
          setPosition();

        })

      })





      const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
        trackText.style.transform = `translateX(${position}px)`;
      }
    });
