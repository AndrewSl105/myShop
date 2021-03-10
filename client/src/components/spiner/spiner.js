import React from 'react';
import spin from '../images/spin.svg'


const Spiner = (props) => {
    return (
        <img 
            src={spin}
            style={{width: "200px", position: "absolute", top: "40%", left: "45%", transform: "translate: (-50%, -50%)"}}
        />
    )
}


export default Spiner;