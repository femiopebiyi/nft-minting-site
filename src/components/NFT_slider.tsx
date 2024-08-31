import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import { ERC1155_ADDY } from "../constants/adresses";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const NFT_slider = () => {

    const { contract } = useContract(ERC1155_ADDY);
  const { data, isLoading, error } = useNFTs(contract);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
  };

  return (
  <div>
    {isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <>
      <Slider {...settings}>
        {data?.map((nft) => (
          <div className="slider-card" key={nft.metadata.id}> {/* Add a unique key */}
            <h2>{nft.metadata.name}</h2>
            {/* <p>{nft.metadata.description}</p> */}
            <div><ThirdwebNftMedia metadata={nft.metadata} /></div>
          </div>
        ))}
        </Slider>
      </>
    )}
  </div>
);


}

export default NFT_slider
