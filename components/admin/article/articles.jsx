import React from 'react';
import AdminLayout from '../AdminLayout';
import ProductTable from './articleTable';
const ArticlesMain = ({products}) => {
    return (
       
        <AdminLayout>


<ProductTable products={products}/>


        </AdminLayout>
    );
}


export default ArticlesMain;
