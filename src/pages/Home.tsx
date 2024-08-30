
import thirdwebIcon from "../thirdweb.svg"
import home from "../images/home.png"
import background from "../images/background1.png"
import background2 from "../images/background2.png"
import nft01 from "../images/nft01.png"
import bull from "../images/bull.png"
import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react"
import { ERC1155_ADDY, ERC721_ADDY } from "../constants/adresses"
import nft from "../images/nft_01.jpg"
import MintSlide from "../components/Mint_slide"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import {useState} from "react"



const Home = () => {
  const { contract } = useContract(ERC1155_ADDY);
  const { data, isLoading, error } = useNFTs(contract);


const [slide, setSlide] = useState(0)

function prevSlide(){
  if(!data) return
  setSlide(slide === 0 ? data.length-1 : slide -1)
}
function nextSlide(){
  if(!data) return
  setSlide(slide === data.length -1 ? 0 : slide + 1)
}

  return (
    <div className="home-page">
      <div className="home-con">
        <div className="home-text">
            <h1>Discover & Collect NFT Artwork</h1>
            <div className="home-btn">
                <button>mint</button>
                <button>Join Waitlist</button>
            </div>
        </div>
        <div className="home-img">
            <img src={bull} alt="" />
        </div>
      </div>
      <div>
      </div>

      <div className="slides">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick = {prevSlide}/>
          {isLoading ? (<p>Loading</p>):
          ( data?.map((nft, index)=>{
          return <div key={index} className = {slide === index ? "slide": "slide slide-hidden"}>
            <MintSlide nfts={nft}/>
          </div>
        }))}
         <BsArrowRightCircleFill className="arrow arrow-right" onClick = {nextSlide}/>
      </div>
    </div>
  )
}

export default Home


 