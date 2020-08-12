window.addEventListener('load', function(){
  const slider1 = document.querySelector('.glider') ? document.querySelector('.glider')  : document.querySelector('.glider--2') 
  const prevClass1 =  document.querySelector('.glider-prev') ? '.glider-prev' : '.glider-prev--2'
  const nextClass1 =  document.querySelector('.glider-next') ? '.glider-next' : '.glider-next--2'
  new Glider(slider1, {
    slidesToShow: 3,
    slidesToScroll: 1,
    // draggable: true,
    arrows: {
      prev: prevClass1,
      next: nextClass1
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

  const slider2 = document.querySelector('.glider--2') ? document.querySelector('.glider--2') : document.querySelector('.glider') 
  const prevClass2 =  document.querySelector('.glider-prev--2') ? '.glider-prev--2' : '.glider-prev'
  const nextClass2 =  document.querySelector('.glider-next--2') ? '.glider-next--2' : '.glider-next'
  new Glider(slider2, {
    slidesToShow: 3,
    slidesToScroll: 1,
    // draggable: true,
    arrows: {
      prev: prevClass2,
      next: nextClass2
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

  function scrollToSection(e, str) {
    e.preventDefault()
    let section = document.getElementById(str);
    section.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
  }