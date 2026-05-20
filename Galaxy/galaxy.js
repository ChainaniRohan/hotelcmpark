var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }

  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++)
      {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
              }
            else
              {
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
              }
           }
        }
  
  // -----------------------------
  // POPUP JS
  // -----------------------------

  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const closeBtn = document.getElementById('closePopup');
  const adImage = document.getElementById('adimg');

  // IMAGE LIST
  const popupImages = [
    "../home/webjpeg/Ad/paneer-kashmiri-deligt-combo.png",
    "../home/webjpeg/Ad/paneer-khurchan.png",
    "../home/webjpeg/Ad/lassi.png",
    "../home/webjpeg/Ad/veg-burger.png",
    "../home/webjpeg/Ad/veg-kofta-with-kulcha.png",
    "../home/webjpeg/Ad/homeD.png",
    "../home/webjpeg/Ad/baby-corn-chilli.png",
    "../home/webjpeg/Ad/mocktail.png",
    "../home/webjpeg/Ad/chulbule-paneer.png"
  ];

  // RANDOM IMAGE FUNCTION
  function setRandomPopupImage() {

    const randomIndex = Math.floor(Math.random() * popupImages.length);

    adImage.src = popupImages[randomIndex];
  }

  // SHOW POPUP AFTER PAGE LOAD
  setTimeout(() => {

    setRandomPopupImage();

    popup.classList.add('popup-show');
    popupContent.classList.add('popup-show');

    document.body.classList.add('popup-open');

  }, 500);


  // CLOSE POPUP BUTTON
  closeBtn.addEventListener('click', closePopup);


  // CLICK OUTSIDE TO CLOSE
  popup.addEventListener('click', function (e) {

    if (e.target === popup) {
      closePopup();
    }
  });


  // ESC KEY CLOSE
  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {
      closePopup();
    }
  });


  // CLOSE FUNCTION
  function closePopup() {

    popup.classList.remove('popup-show');
    popupContent.classList.remove('popup-show');

    document.body.classList.remove('popup-open');
  }

});
