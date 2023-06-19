class App {
  init() {
    this.initSlider();
  }


  initSlider() {
    $(function(){
      $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        responsive : [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              dots: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots: true,
            }
          },
        ]
      });
    })
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
