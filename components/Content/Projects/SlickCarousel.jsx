
import Slider from "react-slick";

export default function SlickCarousel() {

  const settings = {
    className: "center",
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="carousel-container">
      <Slider {...settings}>
          <img src="/assets/ChatAway.webp" alt="chatAway"/>
          <img src="/assets/CV.webp" alt="CV"/>
          <img src="/assets/countryinfo.webp" alt="countryInfo"/>
          <img src="/assets/weather_app.webp" alt="weather_app"/>
          <img src="/assets/portfolio.webp" alt="portfolio"/>
      </Slider>
    </div>
  );
  
}