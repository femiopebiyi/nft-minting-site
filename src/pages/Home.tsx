
import thirdwebIcon from "../thirdweb.svg"
import home from "../images/home.png"
import background from "../images/background1.png"
import background2 from "../images/background2.png"
import nft01 from "../images/nft01.png"
import bull from "../images/bull.png"


const Home = () => {
  return (
    <div className="home-page">
      <div className="home-con">
        <div className="home-text">
            <h1>Discover & Collect NFT Artwork</h1>
            <div className="home-btn">
                <button>mint</button>
                <button>claim</button>
            </div>
        </div>

        <div className="home-img">
            <img src={bull} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
