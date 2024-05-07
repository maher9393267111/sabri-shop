import React from 'react';
import AdminLayout from '../AdminLayout';
import ArticleTable from './articleTable';
const ArticlesMain = ({products}) => {
    return (
       
        <AdminLayout>


<ArticleTable products={products}/>


        </AdminLayout>
    );
}


export default ArticlesMain;
