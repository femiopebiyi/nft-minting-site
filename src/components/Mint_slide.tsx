import { NFT } from "@thirdweb-dev/sdk"
import nft from "../images/nft_01.jpg"
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs, Web3Button } from "@thirdweb-dev/react"
import { ERC1155_ADDY, ERC721_ADDY } from "../constants/adresses"
import { useActiveAccount } from "thirdweb/react"
import { useEffect, useState } from "react"
import {BsXSquare, BsXSquareFill} from "react-icons/bs"



type SLIDEPROPS = {
  nfts: NFT
}

export default function MintSlide({nfts}: SLIDEPROPS){
  const addy = useAddress()
const {contract} = useContract(ERC1155_ADDY)
// const {contract: airdrop} = useContract("0x2d57b6fDdA6a7e7A82CA50CDA71152826571165e")

const {data: ownedNfts, isLoading: ownedNFTsIsLoading} = useOwnedNFTs(contract, addy)
const [ownedId, setownedId] = useState(0)



  return (
      <div className="mint">
        <h1>Collect your NFT before deadline</h1>
        <div className="nft-img">
          <ThirdwebNftMedia metadata={nfts.metadata}/>
        </div>
        <div className="deets">
          <p style={{
            textAlign: "center",
            // border: "1px solid",
            width: "100%",
            fontWeight:"bold"
          }}>{nfts.metadata.name}</p>
        </div>
        {/* <div className="deets">
          <p>Total Price</p>
          <p>0.001ETH</p>
        </div> */}
        <div className="deets">
          <p>Total Price</p>
          <p><strong>0.001ETH</strong></p>
        </div>

        
        <Web3Button contractAddress={ERC1155_ADDY}
        action={(contract)=> contract.erc1155.claim(nfts.metadata.id, 1)}
        onSuccess={()=> alert("claimed")}
        isDisabled={ownedNfts?.some((nft) => nft.metadata.id === nfts.metadata.id)}
        >
          {ownedNfts?.some((nft) => nft.metadata.id === nfts.metadata.id) ? "MINTED" : "MINT NOW"}

        </Web3Button>
        
      </div>
  )
}
