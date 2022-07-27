import React from "react";
import './Milestones.css'
const Milestones = () => {
    return ( 
        <div className="Milestones container">
            <div className="row py-5 mt-5">
                <h1 className="col-12 font_PB display-1 text-center">Milestones</h1>
                <img src="assets/images/milestone-slider.png" className="col-12"/>
                <div className="text-center col-md-5 col-lg-3  py-3 px-2">
                    <h2 className="fs-5">Registered Users</h2>
                    <h1 className="font_PB">3,488,862</h1>
                </div>
                <div className="text-center col-md-5 col-lg-3  py-3 px-2">
                    <h2 className="fs-5">NFT Trade Volume</h2>
                    <h1 className="font_PB">$361,923,371</h1>
                </div>
                <div className="text-center col-md-5 col-lg-3  py-3 px-2">
                    <h2 className="fs-5">NFTs Minted</h2>
                    <h1 className="font_PB">1,638,504</h1>
                </div>
                <div className="text-center col-md-5 col-lg-3  py-3 px-2">
                    <h2 className="fs-5">Most Expensive NFT Sold</h2>
                    <h1 className="font_PB">$1,500,000</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Milestones;