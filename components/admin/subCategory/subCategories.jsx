import React from 'react';
import AdminLayout from '../AdminLayout';
import SubCategoryTable from './subCategoryTable';

const SubCategoriesMain = ({subcats}) => {
    return (
        <div>
            <AdminLayout>
            <SubCategoryTable subcats={subcats} />
            </AdminLayout>
        </div>
    );
}
export default SubCategoriesMain;
