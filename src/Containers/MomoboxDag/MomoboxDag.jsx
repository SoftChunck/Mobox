import React from "react";
import './MomoboxDag.css'
const MomoboxDag = () => {
    React.useEffect(()=>{
        let menu_item_btn = document.querySelectorAll('.menu-item-btn');
        let menu_item_anim = document.querySelectorAll('.menu-item-anim');
        let img_dag = document.querySelector('.img-dag');
        let text_dag = document.querySelectorAll('.text-item-dag');
        let img_dag_clone = document.querySelector('.img-dag-clone');
        for(let x=0;x<3;x++)
        {
            menu_item_btn[x].addEventListener('click',()=>{
                for(let y=0;y<3;y++)
                {   
                    text_dag[y].classList.add('d-none');
                    img_dag_clone.classList.remove(`paint${y}-clone`);
                    img_dag.classList.remove(`paint${y}`);                
                    menu_item_anim[y].setAttribute('style',`border-bottom-color:transparent;width:0px;`);                    
                } 
                text_dag[x].classList.remove('d-none');
                menu_item_anim[x].setAttribute('style',`border-bottom-color:orange;width:100%;`);
                img_dag_clone.classList.add(`paint${x}-clone`);
                img_dag.classList.add(`paint${x}`);                           
                img_dag_clone.classList.remove('img-dag-animate');
                setTimeout(() => {
                    img_dag_clone.classList.add('img-dag-animate');    
                }, 100);      
            })
        }
    })
    return ( 
        <div className="Moboxdag row justify-content-center mt-5 pt-5"> 
            <div className="slider-dag col-lg-1">
                <img src="assets/images/vision-slider.png" />
            </div>
            <div className="col-lg-10 row justify-content-between align-items-center mt-5">
                <div className="text-dag-container col-lg-4 mt-3 row">
                    <div className="menu-dag mt-5">
                        <div className="menu-links col-lg-10 pb-5">
                            <div className="menu-item col-lg-12 py-2">
                                <a className="menu-item-btn font_PB fs-1">NFT Creator</a>
                                <div className="menu-item-anim"></div>
                            </div>
                            <div className="menu-item col-lg-12 py-2">
                                <a className="menu-item-btn font_PB fs-1">Game Creator</a>
                                <div className="menu-item-anim"></div>
                            </div>
                            <div className="menu-item col-lg-12 py-2">
                                <a className="menu-item-btn font_PB fs-1">MOBOX Dag</a>
                                <div className="menu-item-anim"></div>
                            </div> 
                        </div>                 
                        <div className="text-dag">
                            <div className="text-item-dag">
                                <h1 className="display-1 font_PB">NFT Creator</h1>
                                <p className="fs-5">Get rewarded for your fabulous creations. Users can design and mint their own NFTs to be used in the MOMOverse. Original creators receive lifetime trading fees for their NFT creations.</p>
                            </div>
                            <div className="text-item-dag d-none">
                                <h1 className="display-1 font_PB">Game Creator</h1>
                                <p className="fs-5">Easily launch your blockchain game in the MOMOverse. With simple to use APIs, game developers can take advantage of everything the MOMOverse has to offer including free to play and play to earn ecosystem, NFT Marketplaces, MOMO NFTs and more.Got a great game but don’t know where to start? Check out the MOBOX METAfund.</p>
                            </div>
                            <div className="text-item-dag d-none">
                                <h1 className="display-1 font_PB">MOBOX DAG</h1>
                                <p className="fs-5">Create and organize your own Decentralized Autonomous Guild. Using trustless Smart Contracts, start your own MOMO community, share NFT resources, grow your treasury, and have fun and earn together.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-dag col-lg-6 paint0">
                    <img src="assets/images/paint0.png" className="col-12 img-dag-v"/>                    
                    <div className="img-dag-clone paint0-clone img-dag-animate">
                        <img src="assets/images/paint0.png" className="col-12 img-dag-v"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MomoboxDag;