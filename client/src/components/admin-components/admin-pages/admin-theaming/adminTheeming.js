import React, { useState }  from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './adminTheeming.sass';



const AdminTheeming = () => {


    const [navStyle, setNavStyle] = useState(null);

    console.log(navStyle)
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
            </div>
        </div>
    )
}

export default AdminTheeming;