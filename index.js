window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
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
  
  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }

var fragment = create('<div>Hello!</div><p>...</p>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);