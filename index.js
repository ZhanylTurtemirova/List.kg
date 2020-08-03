function initMap() {
  // The location of Uluru
  var uluru = {lat: 42.874860, lng: 74.612243};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

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
  initMap();
})