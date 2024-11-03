
import thirdwebIcon from "../thirdweb.svg"
import home from "../images/home.png"
import background from "../images/background1.png"
import background2 from "../images/background2.png"
import nft01 from "../images/nft01.png"
import bull from "../images/bull.png"
import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react"
import { ERC1155_ADDY, ERC721_ADDY } from "../components/constants/adresses"
import nft from "../images/nft_01.jpg"
import MintSlide from "../components/Mint_slide"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill, BsXSquareFill} from "react-icons/bs"
import {useState} from "react"
import About from "../components/About"
import Team from "../components/Team"
import Roadmap from "../components/Roadmap"
import Contact from "../components/Contact"



const Home = () => {
  const { contract } = useContract(ERC1155_ADDY);
  const { data, isLoading, error } = useNFTs(contract);


const [slide, setSlide] = useState(0)
const [showCard, setShowCard] = useState(false)

function prevSlide(){
  if(!data) return
  setSlide(slide === 0 ? data.length-1 : slide -1)
}
function nextSlide(){
  if(!data) return
  setSlide(slide === data.length -1 ? 0 : slide + 1)
}

  return (
    <div className="home-page" id="home">
      <div className="home-con">
        <div className="home-text">
            <h1>Discover & Collect NFT Artwork</h1>
            <div className="home-btn">
                <button onClick={()=> setShowCard(!showCard)}>mint</button>
                <button>Join Waitlist</button>
            </div>
        </div>
        <div className="home-img">
            <img src={bull} alt="" />
        </div>
      </div>
      <div>
      </div>

      <div className="slides" 
      style={{
        display: showCard ? "flex" : "none"
      }}
      >
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick = {prevSlide}/>
          {isLoading ? (<p>Loading</p>):
          ( data?.map((nft, index)=>{
          return <div key={index} className = {slide === index ? "slide": "slide slide-hidden"}>
            <MintSlide nfts={nft}/>
          </div>
        }))}
         <BsArrowRightCircleFill className="arrow arrow-right" onClick = {nextSlide}/>
         <BsXSquareFill className="cancel-btn" onClick={()=>setShowCard(!showCard)}/>
      </div>



      <section className="about">
        <About/>



          <section className="team">
            <div className="meet">
              <h2>team</h2>
            <h1>meet the team</h1>
            </div>
            <Team/>
        </section>


        <section className = "roadmap">
          <Roadmap/>
        </section>


        <section className="contact">
          <Contact/>
        </section>
      </section>


      
    </div>
  )
}

export default Home


 