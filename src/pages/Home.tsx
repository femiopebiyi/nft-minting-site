
import thirdwebIcon from "../thirdweb.svg"
import home from "../images/home.png"
import background from "../images/background1.png"
import background2 from "../images/background2.png"
import nft01 from "../images/nft01.png"
import bull from "../images/bull.png"
import { ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react"
import { ERC721_ADDY } from "../constants/adresses"



const Home = () => {
  const { contract } = useContract(ERC721_ADDY);
  const { data, isLoading, error } = useNFTs(contract);



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
      {/* <div>
        {data?.map((nft, index)=>{
          return <div key={index}>
            <ThirdwebNftMedia metadata={nft.metadata}/>
          </div>
        })}
      </div> */}
    </div>
  )
}

export default Home
