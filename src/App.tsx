
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";
import {  ConnectWallet, useContract, useContractMetadata} from "@thirdweb-dev/react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";




export  function App() {
	
	return (
		<div className="home">
			<Router>
				<NavBar />
				<Routes>
					<Route index element = {<Home/>}/>
				</Routes>
			</Router>
		</div>
	)
}


