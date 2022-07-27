import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import Button_B from "../../Component/Button_B/Button_B";
import './Vision.css'
const Vision = () => {
    return ( 
        <div className="Vision justify-content-center align-items-center row">
            <div className="col-md-1 col-2">                    
                <img src="assets/images/vision-slider.png" className="vision-img"/> 
            </div>    
            <div className="row col-10">                                                
                <h1 className="col-12 font_PB display-1 row">Vision</h1>          
                <div className="d-flex flex-row col-12 justify-content-between align-items-center row">
                        <div className="col-lg-4 pt-5">      
                            <div>
                                <h3>Free To Play, Play To Earn</h3>
                                <p>Users get rewarded for their engagement and enjoyment. A Metaverse combining Decentralized Finance and Games creating an ecosystem where developers, players, and collectors come together in one world.</p>
                            </div>
                            <div>
                                <h3>Owned by Players</h3>
                                <p>Players get true ownership of their in-game assets. Utilizing the power of NFTs, assets you earn in games are owned by the player and lives forever on the blockchain.</p>
                            </div>
                            <div>
                                <h3>Added-value for NFTs</h3>
                                <p>Assets can be used across the whole ecosystem. With a focus on NFT interoperability, assets can be used in multiple games at the same time, creating a whole new world of fun.</p>
                            </div>
                        </div>                    
                        <div className="col-lg-6 row">
                            <img src="assets/images/vision-img.jpg" className="col-12"/>
                        </div>                    
                </div>                
                <div className="row justify-content-start mt-5">                    
                    <Button_B data="Play Now"></Button_B>
                </div>
            </div>
        </div>
     );
}
 
export default Vision;