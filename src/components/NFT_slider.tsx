import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import { ERC1155_ADDY } from "./constants/adresses";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react"

const NFT_slider = () => {
  const { contract } = useContract(ERC1155_ADDY);
  const { data, isLoading, error } = useNFTs(contract);

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
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Slider {...settings} className="d-slider">
              {data?.map((nft) => (
                <div className="slider-card" key={nft.metadata.id}>
                  <h2>{nft.metadata.name}</h2>
                  {/* <p>{nft.metadata.description}</p> */}
                  <div>
                    <ThirdwebNftMedia metadata={nft.metadata} />
                  </div>
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    );
  }

  return <CustomArrows />;
};

export default NFT_slider;
