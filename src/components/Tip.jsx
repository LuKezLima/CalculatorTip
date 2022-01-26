import React from "react";
import './Tip.css'

export default ({value, onClick, active}) => {
    return(
        <button className={active && 'active'}
         value={value} onClick={onClick}>{value}%</button>
    )
}