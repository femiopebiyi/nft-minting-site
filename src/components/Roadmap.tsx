import Slider from "react-slick";
import { roadmapDetails } from "./constants/roadmap_deet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roadmap = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none", transform: "scale(1.3)" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none", transform: "scale(1.3)" }}
        onClick={onClick}
      />
    );
  }

  function CustomArrows() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="roadmap-con slider-container">
        <Slider {...settings}>
          {roadmapDetails.map((detail, index) => (
            <div className="roadmap-phase" key={index}>
              <h2>{detail.phase}</h2>
              <h1>{detail.name}</h1>
              <p>{detail.details}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return <CustomArrows />;
};

export default Roadmap;
