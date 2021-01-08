import React from 'react'
import withHocs from './adminProductsTableHoc';
import './adminProductsTable.sass'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import DeleteProductForm from '../admin-forms/delete-product-form/deleteProductForm';


const AdminProductsTable = (props) => {

    const { data = {} } = props;
    const { products = [] } = data;

    const dataTable = products.map(product => {
        return product
    })
    
    const [expandedRows, setExpandedRows] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [productId, setProductId] = useState('')

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                </DataTable>
            </div>
        );
    }

    const editProduct = (product) => {

        //ssetProduct({...product});
        setProductDialog(true);
    }


    const confirmDeleteProduct = (product) => {
        setDeleteProductDialog(true);
        setProductId(product.id)

    }


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-outlined p-button-success p-mr-2" onClick={() => editProduct(rowData)} />
                <Button style={{marginLeft: '4rem'}} icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    return (
        <div className='products-table'>
            <DataTable value={dataTable}  expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)} rowExpansionTemplate={rowExpansionTemplate} dataKey="id" sortable> 
                <Column field="name" header="Name" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="size" header="Sizes" sortable></Column>
                <Column field="price" header="Price" sortable></Column>
                <Column body={actionBodyTemplate}></Column>
            </DataTable>
            <Dialog
                visible={productDialog}
                style={{ width: '450px' }}
                header="Product Edit"
                modal className="p-fluid"
                onHide={hideDialog}>
            </Dialog>
            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Are you sure to delete?" modal onHide={hideDeleteProductDialog}>
                <DeleteProductForm data={productId}
                  />
            </Dialog>
        </div>
    )
}

export default withHocs(AdminProductsTable)