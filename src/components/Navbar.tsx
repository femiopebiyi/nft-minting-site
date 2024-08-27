import { ConnectButton } from "thirdweb/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import thirdwebIcon from "../thirdweb.svg";
import {client} from "../client"
import { NavLink, useNavigate } from "react-router-dom";

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
                <div className="btn">
						<NavLink to="/" className="link">Home</NavLink>
						<span className="BorderTopBottom"></span>
						<span className="BorderLeftRight"></span>
					</div>
					<div className="btn">
						<NavLink to="/about" className="link">About</NavLink>
						<span className="BorderTopBottom"></span>
						<span className="BorderLeftRight"></span>
					</div>
					<div className="btn">
						<NavLink to="/roadmap" className="link">Roadmap</NavLink>
						<span className="BorderTopBottom"></span>
						<span className="BorderLeftRight"></span>
					</div>
					<div className="btn">
						<NavLink to="/team" className="link">Team</NavLink>
						<span className="BorderTopBottom"></span>
						<span className="BorderLeftRight"></span>
					</div>

            </div>

			<div className="connect">
					<ConnectButton client={client} connectButton={{
						style:{
							color: "white",
							backgroundColor: "#0070d2"
						}
					}}
					
					/>
				</div>
		</header>
	);
}


                
                
                