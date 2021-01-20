import React from 'react'
import { connect } from 'react-redux';

const Example = (props) => {

    const navStyles = props.styles

    return (
        <div style={navStyles.styles}>
            
        </div>
    )
}
const mapStateToPropsTotal = (state) => {

    return {
        styles: state.styles
    };
};

export default connect(mapStateToPropsTotal, null)(Example );
