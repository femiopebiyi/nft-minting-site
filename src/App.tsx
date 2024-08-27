import { ConnectButton, useActiveAccount, useActiveWallet, useActiveWalletConnectionStatus} from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";
import {  ConnectWallet, useContract, useContractMetadata} from "@thirdweb-dev/react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";




export  function App() {

	const connectionStatus = useActiveWalletConnectionStatus()
	const addy = useActiveAccount()

	const {contract} = useContract("0x18b19bc15E3fE79251D352596fDCC33AaF4bfB30")
  const {data, isLoading} = useContractMetadata(contract)

	
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


