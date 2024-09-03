import { useContract, useNFTs, useTotalCirculatingSupply, useClaimedNFTSupply, useTotalCount } from "@thirdweb-dev/react"
import { ERC1155_ADDY } from "../constants/adresses"
import { useEffect, useState } from "react";
import { BigNumber } from "ethers";
import NFT_slider from "./NFT_slider";
import { EmblaOptionsType } from 'embla-carousel'




export default function About(){
    const source = "https://aenft-react.netlify.app/images/about_img.svg"
    const {contract} = useContract(ERC1155_ADDY)
    const { data: totalNFTS, isLoading: totalNFTsLoading, error } = useNFTs(contract);
    const { data, isLoading } = useClaimedNFTSupply(contract);

     const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    


    return (
    <>
        <div className="about-con" id="about">
            <div className="about-main">
                <h2> our story</h2>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem hic libero consectetur excepturi numquam beatae expedita, iste saepe vero omnis ab aliquam ipsam ex pariatur! Voluptas cum dolorum officiis obcaecati iure velit cumque! Laboriosam eius eos laudantium praesentium repellat ipsa inventore modi vero aliquid reiciendis consequatur suscipit, sit, eveniet nam, blanditiis quo ipsam ab soluta hic repellendus! Ipsum id exercitationem incidunt et enim atque quae non. <br /> <br /> Similique aut, temporibus error quidem fuga nulla consequuntur illo voluptatibus necessitatibus corporis nemo est quia amet. Eum sint fugiat recusandae fuga reprehenderit voluptatibus animi placeat aut, doloremque asperiores blanditiis provident nemo vitae. Architecto.
                </p>
                    <button>Start Now</button>
            </div>


            <div className="about-pic">
                <img src={source} alt="about pic" />
            </div>
        </div>

        <div className="supplies">
        <div className="supply">
                <h1>{totalNFTsLoading ? "Loading..." :  `${totalNFTS?.length}` }</h1>
                <h3>Total Items</h3>
        </div>
        <div className="supply">
                <h1>37</h1>
                <h3>Total Owners</h3>
        </div>
        <div className="supply">
                <h1>0.001</h1>
                <h3>Floor Price</h3>
        </div>
        <div className="supply">
                <h1>43.4</h1>
                <h3>Volume Traded</h3>
        </div>
        </div>


        <div className="slider-con">
            <h1 className="our">Our Collection</h1>
            <NFT_slider/>
        </div>
        </>
    )
}