class App {
  init() {
    this.initSlider();
    this.afterVideoPlay();
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

  afterVideoPlay() {
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    const vidoWrapper = document.querySelector('.promo__video')

    const onPlay = () => {
      vidoWrapper.style.borderRadius = 'unset';
    };

    player.on('play', onPlay);
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
