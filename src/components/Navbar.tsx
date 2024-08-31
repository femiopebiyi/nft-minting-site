import { ConnectButton } from "thirdweb/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import thirdwebIcon from "../thirdweb.svg";
import {client} from "../client"
import { NavLink, useNavigate } from "react-router-dom";
import wallet from "../images/wallet.png"
import logo from "../images/default.svg"

export default function NavBar() {
	const navigate = useNavigate()

	return (
		<header className="nav">
			
			<img
				src={thirdwebIcon}
				alt=""
				className="size-[150px] md:size-[150px]"
				style={{
					filter: "drop-shadow(0px 0px 24px #a726a9a8)",
					width: "70px",
					height: "70px",
					cursor: "pointer"
				}}
				onClick={()=> navigate("/")}
			/>

            <div className="links">
    <div className="btn" onClick={() => {
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}>
        <a href="#home" className="link">Home</a>
        <span className="BorderTopBottom"></span>
        <span className="BorderLeftRight"></span>
    </div>
    <div className="btn" onClick={() => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}>
        <a href="#about" className="link">About</a>
        <span className="BorderTopBottom"></span>
        <span className="BorderLeftRight"></span>
    </div>
    <div className="btn" onClick={() => {
        const element = document.getElementById('roadmap');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}>
        <a href="#roadmap" className="link">Roadmap</a>
        <span className="BorderTopBottom"></span>
        <span className="BorderLeftRight"></span>
    </div>
    <div className="btn" onClick={() => {
        const element = document.getElementById('team');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }}>
        <a href="#team" className="link">Team</a>
        <span className="BorderTopBottom"></span>
        <span className="BorderLeftRight"></span>
    </div>
</div>

			<div className="connect">
				{/* <img src={wallet} alt="" /> */}
					<ConnectWallet
					
					/>
				</div>
				
		</header>
	);
}


                
                
                