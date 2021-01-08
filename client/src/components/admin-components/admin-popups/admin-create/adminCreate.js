import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import AddProductForm from '../../../admin-components/admin-forms/add-product-form/addProductForm'
import { useState } from 'react';

const AdminCreate = () => {

    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayPosition': setDisplayPosition
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const btnStyles = {
        position: 'absolut',
        top: "25%",
        left: "90%"
    }

    return (
        <div className="dialog-demo">
            <div className="card">
                <div className="p-grid p-dir-col">
                    <div className="p-col">
                        <Button onClick={() => onClick('displayPosition', 'top')} style={btnStyles}>
                            Add new
                         </Button>
                    </div>
                </div>
                <Dialog visible={displayPosition} position={position} modal style={{ width: '30vw' }} onHide={() => onHide('displayPosition')}>
                    <AddProductForm />
                </Dialog>
            </div>
        </div>
    )
}



export default AdminCreate
