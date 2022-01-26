import React from "react";
import './Input.css'

function Input({icon, value, onChange}){




    return(
        <div id="InputBox">
                <input type="text" placeholder="0" value={value} onChange={onChange} style={{
                    backgroundImage: `url(${icon})`
                }}/>  
        </div>
    )
}

export default Input