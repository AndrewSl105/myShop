import React from 'react'
import AdminProductsTable from '../../admin-products/adminProductsTable'
import './adminProductList.sass'
import AdminCreate from '../../admin-popups/admin-create/adminCreate'
import AddProductForm from '../../admin-forms/add-product-form/addProductForm'


const AdminProductList = () => {
    return (
        <div className='list-cont'>
            <AdminCreate />
            <AdminProductsTable />
        </div>
    )
}



export default AdminProductList
