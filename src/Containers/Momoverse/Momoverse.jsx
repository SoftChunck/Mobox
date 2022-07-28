import { MoveToInboxRounded } from "@material-ui/icons";
import React from "react";
import './Momoverse.css'
const Momoverse = () => {
    React.useEffect(()=>{
        let momo_div = document.querySelector('.momo-text-div');
        let momo_slider = document.querySelector('.momo-slider');
        momo_slider.setAttribute('style',`height:${momo_div.clientHeight}px;`);
        let momoverse_a = document.querySelectorAll('.momoverse-a');
        let active_div = document.querySelectorAll('.active-div');
        let verse_img = document.querySelector('.img-verse');

        momoverse_a[0].addEventListener('click',()=>{
            for(let y=0;y<3;y++)
            {                
                active_div[y].setAttribute('style',`border-bottom-color:transparent;width:0px;`);                    
            }
            active_div[0].setAttribute('style',`border-bottom-color:#1949c6;width:${momoverse_a[0].clientWidth}px`);
            verse_img.setAttribute('style','opacity:0;transform:translateX(20px);');
            setTimeout(() => {                
                verse_img.setAttribute('src','assets/images/verse1.png');
                verse_img.setAttribute('style','opacity:1;transform:translateX(0px);');
            }, 450);
        })
        momoverse_a[1].addEventListener('click',()=>{
            for(let y=0;y<3;y++)
            {
                active_div[y].setAttribute('style',`border-bottom-color:transparent;width:0px;`);                    
            }
            active_div[1].setAttribute('style',`border-bottom-color:#1949c6;width:${momoverse_a[1].clientWidth}px`);
            verse_img.setAttribute('style','opacity:0;transform:translateX(20px);');
            setTimeout(() => {                
                verse_img.setAttribute('src','assets/images/verse2.png');
                verse_img.setAttribute('style','opacity:1;transform:translateX(0px);');
            }, 450);
        })
        momoverse_a[2].addEventListener('click',()=>{
            for(let y=0;y<3;y++)
            {
                active_div[y].setAttribute('style',`border-bottom-color:transparent;width:0px;`);                    
            }
            active_div[2].setAttribute('style',`border-bottom-color:#1949c6;width:${momoverse_a[2].clientWidth}px`);
            verse_img.setAttribute('style','opacity:0;transform:translateX(20px);');
            setTimeout(() => {           
                verse_img.setAttribute('src','assets/images/verse3.png');   
                verse_img.setAttribute('style','opacity:1;transform:translateX(0px);');
            }, 450);
        })
    }
    )
    return ( 
        <div className="Momoverse row justify-content-center m-0">
            <div className="mt-5 pt-5 col-md-10 justify-content-center row m-0">
                <h1 className="col-12 font_PB display-1 text-center mt-5 pt-5 text-white ">MOBOverse</h1>
                <p className="col-md-8 col-10 text-white text-center">The MOMOverse is a cross platform metaverse that can be enjoyed on all devices no matter where you are. Whether it is creating content or enjoying others’ creations, the MOMOverse rewards players, developers, and collectors for their engagement and enjoyment.</p>
            </div>
            <div className="row justify-content-around m-0">
                <div className="row col-md-11 col-lg-10 align-items-center justify-content-between  momo-text-div m-0">
                        <div className="col-md-12 col-lg-7 justify-content-center order-3 order-lg-1">
                            <div className="row m-0">
                                <img src="assets/images/verse1.png" className="img-verse" />
                            </div>
                            <p className="row text-white mb-5 pt-2">MOBOX Blind Boxes are real life blind boxes that contain unique MOMO figurines with a QR code on each one. Players can scan the QR code and the same unique MOMO is immediately minted on the Binance Smart Chain and used across the MOMOverse.</p>  
                        </div>
                        <div className="row col-md-12 col-lg-4 col-xl-3 m-0 justify-content-end align-items-start order-2 order-lg-2 text-div-verse">
                            <div className="col-md-4 col-lg-11 py-2 ">
                                <a className="font_PB momoverse-a fs-3 row m-0">MOMO Avatar</a>
                                <div className="active-div"></div>
                            </div>
                            <div className="col-md-4 col-lg-11 py-2">
                                <a className="font_PB momoverse-a fs-3 row m-0">MOMO NFTs</a>
                                <div className="active-div"></div>
                            </div>
                            <div className="col-md-4 col-lg-11 py-2">
                                <a className="font_PB momoverse-a fs-3 row m-0">Blind Box</a>
                                <div className="active-div "></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 momo-slider d-none d-lg-flex">
                        <img src="assets/images/moboverse-slider.png" className="img-slide-verse"/>
                    </div>
            </div>
            <div className="dis row">
            <div className="row justify-content-end m-0 decorate-div-verse">
                <img src="assets/images/decorate.png" className="decorate-img-verse col-3" />
           </div>
            </div>
           
        </div>
     );
}
 
export default Momoverse;