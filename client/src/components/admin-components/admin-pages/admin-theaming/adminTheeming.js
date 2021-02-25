import React, { useState, useEffect }  from 'react';
import { RadioButton } from 'primereact/radiobutton';
import './adminTheeming.sass';
import { connect } from 'react-redux';
import {upgrateNavStyles} from '../../../../redux/actions'
import axios from "axios";
import DataFrom from './datafrom'
const AdminTheeming = (props) => {

    const changeStyles = () => {
        
    }
    
    return (
        <div className='theeme-container'>
            <div className='theeme'>
                <DataFrom />
            </div>
        </div>
    )
}

const mapStateToPropsTotal = (state) => {
    let styleResult = Object.values(state.styles).flat(1)


    return {
        styles: styleResult
    };
};

export default connect(mapStateToPropsTotal, null)(AdminTheeming);
