import React from 'react';
import AdminLayout from '../AdminLayout';
import ProductTable from './productTable';
const ProductsMain = ({products}) => {
    return (
       
        <AdminLayout>


<ProductTable products={products}/>


        </AdminLayout>
    );
}


export default ProductsMain;
