window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    // draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    scrollLock: false,
    responsive: [
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        itemWidth: 250,
        duration: 0.25
      }
    }
  ]
  })
  new Glider(document.querySelector('.glider--2'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    // draggable: true,
    arrows: {
      prev: '.glider-prev--2',
      next: '.glider-next--2'
    },
    scrollLock: false,
    responsive: [
    {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        itemWidth: 250,
        duration: 0.25
      }
    }
  ]
  })  
})
var modal = document.getElementsByClassName("modal");

  function openModal(id) {
    modal[id].style.display = "block";
  }

  function closeModal(id) {
    modal[id].style.display = "none";
  }

  window.onclick = function(event) {
    for (i = 0; i < modal.length; i++) {
      if (event.target == modal[i]) {
        modal[i].style.display =  modal[i].style.display==='block' && 'none';
      }
    }
  }
