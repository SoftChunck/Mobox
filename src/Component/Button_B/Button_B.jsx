import React from "react";
import './Button_B.css'
const Button_B = (props) => {
    return ( 
        <div className="Button-B">
            <div className="btn-div row">
                    <img className="btn-img row p-0 m-0" src="assets/images/btn1.8900bf97.png"/>                    
                    <p className="btn-p m-0 p-0">{props.data}</p>
            </div>
        </div>
     );
}
 
export default Button_B;