import React, { useState }  from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './adminTheeming.sass';
import { connect } from 'react-redux';
import {upgrateNavStyles} from '../../../../redux/actions'


const AdminTheeming = (props) => {
    const [navStyle, setNavStyle] = useState(null);

    

    console.log(props.styles)

   

    const changeStyles = () => {
        
    }
    
    return (
        <div className='theeme-container'>
            <div className='theeme'>
                <div className="p-field-radiobutton">
                    <RadioButton 
                        inputId="horizont"
                        name="nav-style"
                        value="Horizont"
                        onChange={(e) => setNavStyle(e.value)} 
                        checked={navStyle === 'Horizont'} 
                       />
                    <label htmlFor="city1"> Horizont</label>
                </div>
                <div className="p-field-radiobutton">
                    <RadioButton 
                        inputId="vertical" 
                        name="nav-style"
                        value="Vertical" 
                        onChange={(e) => setNavStyle(e.value)} 
                        checked={navStyle === 'Vertical'} 
                    />
                    <label htmlFor="city2">Vertical</label>
                </div>
                <button onClick={changeStyles} >
                    Add styles
                </button>
            </div>
        </div>
    )
}

const mapStateToPropsTotal = (state) => {
    let styleResult = Object.values(state.styles).flat(1)

    console.log(styleResult)

    return {
        styles: styleResult
    };
};

export default connect(mapStateToPropsTotal, null)(AdminTheeming);
